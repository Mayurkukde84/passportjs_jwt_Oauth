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
            res.status(404).send("please fill the all data")
        }

    try{
        const preasset = await asset.findOne({ ItemName:ItemName});
        console.log(preasset)

        if(preasset){
            res.status(404).send("this user is already present");
        }else{
            const addasset = new asset({
                ItemName,Descripation,Type,Mode,Vendor,Receipt,Price,CostCode,ProjectName,
    OwnedBy,OwnershipDocument,DateOfPurchase
            });
            await addasset.save();
            res.status(201).json();
            console.log(addasset);
        }

    }catch (error){
        res.status(404).send(error)
    }

})

module.exports = assetRouter