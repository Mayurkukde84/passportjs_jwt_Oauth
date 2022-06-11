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
            res.status(422).json("please fill the all data")
        }

    try{
        const preasset = await asset.findOne({ ItemName:ItemName});
        

        if(preasset){
            res.status(422).json("this user is already present");
        }else{
            const addasset = new asset({
                ItemName,Descripation,Type,Mode,Vendor,Receipt,Price,CostCode,ProjectName,
    OwnedBy,OwnershipDocument,DateOfPurchase
            });
            await addasset.save();
            res.status(201).json(addasset);
            
        }

    }catch (error){
        res.status(422).json(error)
    }

})

assetRouter.get("/getasset", async (req, res) => {
    try {
      const assetUser = await asset.find();
      res.status(201).json(assetUser);
      console.log(assetUser);
    } catch (error) {
      res.status(422).json(error);
    }
  });

  assetRouter.get("/getasset/:id", async (req, res) => {
    try {
      
      const {id} = req.params;
      const assetuserid = await asset.findById({_id:id});
      
      res.status(201).json(assetuserid)
    } catch (error) {
      res.status(422).json(error);
    }
  });

 
  assetRouter.patch("/getassetedit/:id",async(req,res)=>{
    try{
        const {id} = req.params;

        const updateasset = await asset.findByIdAndUpdate(id,req.body,{
            new:true
        })
        
        res.status(201).json(updateasset)
    }catch(error){
        res.status(422).json(error)
    }
})

assetRouter.delete("/getassetdelet/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const getassetdelet = await asset.findByIdAndDelete({_id:id})
               
                res.status(201).json(getassetdelet)
        }catch(error){
            res.status(422).json(error)
        }
    
})


module.exports = assetRouter