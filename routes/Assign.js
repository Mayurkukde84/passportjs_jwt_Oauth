const express = require("express");
const assignRouter = express.Router();
const assign = require("../models/AssetAssign");
const User = require("../models/User");



assignRouter.post("/tableassign", async (req, res) => {

const {
    UserName,
    Member,
    TaskAssign,
    Descripation
} = req.body


  if (!UserName || !Member||
    !TaskAssign ||
    !Descripation) {
    res.status(422).json("plz fill the data");
  }
  try{
    const preassign = await assign.findOne({ TaskAssign: TaskAssign});

    if(preassign){
        res.status(422).json("this is user already present")
    }else{
        const addassign = new assign({
            UserName,
            Member,
            TaskAssign,
            Descripation
        });
        await addassign.save();
        res.status(201).json(addassign)
    }
  }catch(error){
    res.status(422).json(error)
  }
});

assignRouter.get("/getassign",async(req,res)=>{
    try{
        const assignUser = await assign.find();
        res.status(201).json(assignUser)
        console.log(res.body)
        

    }catch(error){
        res.status(422).json(error)

    }
})

module.exports = assignRouter