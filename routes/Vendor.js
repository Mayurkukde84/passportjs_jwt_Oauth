const express = require("express");
const vendorRouter = express.Router();
const vendors = require("../models/Vendor");
const router = require("./auth");

vendorRouter.post("/tablevendor", async (req, res) => {

  const {
    id,
    VendorID,
    VendorName,
    PhoneNumber,
    GSTNumber,
    VendorType,
    BankAccountDetails,
    Address,
  } = req.body;
  if (
    !id ||
    !VendorID ||
    !VendorName ||
    !PhoneNumber ||
    !GSTNumber ||
    !VendorType ||
    !BankAccountDetails ||
    !Address
  ) {
    res.status(422).json("plz fill the data");
  }
  try {
    const prevendor = await vendors.findOne({ VendorName: VendorName });
    

    if (prevendor) {
      res.status(422).json("this is user is already present");
    } else {
      const addvendors = new vendors({
        id,
        VendorID,
        VendorName,
        PhoneNumber,
        GSTNumber,
        VendorType,
        BankAccountDetails,
        Address,
      });
      await addvendors.save();
      res.status(201).json(addvendors);
      
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

//get userdata
vendorRouter.get("/getvendor", async (req, res) => {
  try {
    const vendorUser = await vendors.find();
    res.status(201).json(vendorUser);
  
  } catch (error) {
    res.status(422).json(error);
  }
});

vendorRouter.get("/getvendor/:id", async (req, res) => {
  try {
    
    const {id} = req.params;
    const vendoruser = await vendors.findById({_id:id});
   
    res.status(201).json(vendoruser)
  } catch (error) {
    res.status(422).json(error);
  }
});


vendorRouter.patch("/getvendoredit/:id",async(req,res)=>{
    try{
        const {id} = req.params;

        const updatevendor = await vendors.findByIdAndUpdate(id,req.body,{
            new:true
        })
      
        res.status(201).json(updatevendor)
    }catch(error){
        res.status(422).json(error)
    }
})

vendorRouter.delete("/getvendordelet/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const getvendordelet = await vendors.findByIdAndDelete({_id:id})
               
                res.status(201).json(getvendordelet)
        }catch(error){
            res.status(422).json(error)
        }
    
})


module.exports = vendorRouter;
