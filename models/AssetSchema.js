const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({

    ID:{
        type: String,
        required:true,
      
    },
    Barcode:{
        type: String,
        required:true,
      
    },
    ItemName:{
        type: String,
        required:true,
        unique:true
    },
    Descripation:{
        type: String,
        required:true
    },
    Type:{
        type: String,
        required:true
    },
    Mode: {
        type: String,
        required:true
    },
    Vendor: {
        type: String,
        required:true
    },
    Receipt: {
        type: String,
        required:true
    },
    Price: {
        type: String,
        required:true
    },
    CostCode: {
        type: String,
        required:true
    },
    ProjectName: {
        type: String,
        required:true
    },
    OwnedBy: {
        type: String,
        required:true
    },
    OwnershipDocument: {
        type: String,
        required:true
    },
    DateOfPurchase: {
        type: String,
        required:true
    }

});

const asset = new mongoose.model("asset",assetSchema);

module.exports = asset