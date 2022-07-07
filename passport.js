const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const User = require("./models/User");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const GOOGLE_CLIENT_ID =
  "1039166106086-ob8a8tni2hlmlv7bdvc05eakmjlhv08s.apps.googleusercontent.com";
const GOOGLE_SLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_SLIENT_SECRET,
      callbackURL: "http://localhost:3000/useroptions",
      passReqToCallback: true,
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("google", profile);
      console.log(done)

      return done(err, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

// authorization
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: "Neuoflux",
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        else return done(null, false);
      });
    }
  )
);

// authenticated local strategy using username and password
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      // something went wrong with database
      if (err) return done(err);
      // if no user exist
      if (!user) return done(null, false); 
      // check if password is correct
      user.comparePassword(password, done);
    });
  })
);
