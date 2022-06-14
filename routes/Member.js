const { response } = require("express");
const express = require("express");
const memberRouter = express.Router();
const member = require("../models/Member");

memberRouter.post("/member", async (req, res) => {
  const {Member} = req.body;
  console.log(req.body)

  try {
    const premember = await member.findOne({ Member: Member });

    if (!premember) {
      const addmember = new member({
        Member
      });
      await addmember.save();
      res.status(201).json(addmember);
    }
  } catch (err) {
    res.status(422).json(err);
  }
});

memberRouter.get("/getmember", async (req,res)=>{
   try{
    const getmember = await member.find();
    res.status(201).json(getmember)
    console.log(getmember)
   }catch(error){
    res.status(422).json(error)
   }
})

module.exports = memberRouter;
