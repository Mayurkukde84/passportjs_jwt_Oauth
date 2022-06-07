const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());
const passport = require("passport");
const authRoute = require("./routes/auth")
const cors = require("cors")
require("./passport")
const cookieSession = require("cookie-session")
const vendor = require("./models/Vendor")

mongoose.connect('mongodb+srv://mernauth:1122334455@cluster0.lpllf.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser : true,useUnifiedTopology: true},()=>{
    console.log('successfully connected to database');
});

app.use(cookieSession(
  {
      name:"session",
      keys:["neuoflux"],
      maxAge: 24*60*60*100,
  }
))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(cors({}))
  // origin:"http://localhost:3000",
  // methods:"GET,POST,PUT,DELETE",
  // credentials:true,


app.use ("/auth",authRoute)


const userRouter = require('./routes/User');

app.use("/user", userRouter)

const venderRouter = require("./routes/Vendor")
app.use(venderRouter)

app.listen(5000, () => {
  console.log("express server started");
});
