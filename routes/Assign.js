const express = require("express");
const assignRouter = express.Router();
const assign = require("../models/AssetAssign");




assignRouter.post("/tableassign", async (req, res) => {

const {
    UserName,
    Member,
    TaskAssign,
    Descripation
} = req.body;


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
       
        

    }catch(error){
        res.status(422).json(error)

    }
})

assignRouter.get("/getassigndetails/:id", async (req, res) => {
  try {
    
    const {id} = req.params;
    const assignuserid = await assign.findById({_id:id});
    
    res.status(201).json(assignuserid)
  } catch (error) {
    res.status(422).json(error);
  }
});


assignRouter.patch("/getassignedit/:id",async (req,res)=>{
  try {
    const {id} = req.params;
    const updateassign = await assign.findByIdAndUpdate(id,req.body,{
      new:true
    })
    res.status(201).json(updateassign)
  } catch (error) {
    res.status(422).json(error)
    
  }
})

assignRouter.delete("/getassigndelet/:id", async(req,res)=>{
  try{
    const {id} = req.params;
    const getassigndelet = await assign.findByIdAndDelete({_id:id});
    res.status(201).json(getassigndelet)
  }catch{
    res.status(422).json(error)
  }
})




module.exports = assignRouter