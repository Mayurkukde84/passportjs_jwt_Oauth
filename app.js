const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const passport = require("passport");
const authRoute = require("./routes/auth")
const cors = require("cors")
require("./passport")
const cookieSession = require("cookie-session")
const vendor = require("./models/Vendor")
const asset = require("./models/AssetSchema")
const employee = require("./models/EmployeeSchema")
const assign = require("./models/AssetSchema")
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use (bodyParser.json ());



mongoose.connect('mongodb+srv://mernauth:1122334455@cluster0.lpllf.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser : true,useUnifiedTopology: true},()=>{
    console.log('successfully connected to database');
});

app.use(cookieParser());
app.use(express.json());
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

const assetRouter = require("./routes/Asset")
app.use(assetRouter)

const memberRouter = require("./routes/Member")
app.use(memberRouter)

const employeeRouter = require("./routes/Employee")
app.use(employeeRouter)

const assignRouter = require("./routes/Assign")
app.use(assignRouter)

const projectRouter = require("./routes/Project")
app.use(projectRouter)

app.listen(5000, () => {
  console.log("express server started");
});
