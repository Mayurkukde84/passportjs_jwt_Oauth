const express = require("express");
const assetRouter = express.Router();
const asset = require("../models/AssetSchema")

assetRouter.post("/tableasset", async(req,res) =>{
    console.log(req.body);
    const {ItemName,Descripation,Type,Mode,Vendor,Receipt,Price,CostCode,ProjectName,
    OwnedBy,OwnershipDocument,DateOfPurchase} = req.body

    if(!ItemName || !Descripation || !Type || !Mode || !Vendor || !Receipt||
        !Price || !CostCode || !ProjectName ||
        !OwnedBy || !OwnershipDocument || !DateOfPurchase){
            res.status(404).json("please fill the all data")
        }

    try{
        const preasset = await asset.findOne({ ItemName:ItemName});
        console.log(preasset)

        if(preasset){
            res.status(404).json("this user is already present");
        }else{
            const addasset = new asset({
                ItemName,Descripation,Type,Mode,Vendor,Receipt,Price,CostCode,ProjectName,
    OwnedBy,OwnershipDocument,DateOfPurchase
            });
            await addasset.save();
            res.status(201).json(addasset);
            console.log(addasset);
        }

    }catch (error){
        res.status(404).json(error)
    }

})

assetRouter.get("/getasset", async (req, res) => {
    try {
      const assetUser = await asset.find();
      res.status(201).json(assetUser);
      console.log(assetUser);
    } catch (error) {
      res.status(404).json(error);
    }
  });

module.exports = assetRouter