const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({

    ID:{
        type: String,
        
      
    },
    Barcode:{
        type: Number,
    
      
    },
    ItemName:{
        type: String,
        unique:true
    
        
    },
    Descripation:{
        type: String,
        
    },
    Type:{
        type: String,
        
    },
    Mode: {
        type: String,
        
    },
    Vendor: {
        type: String,
        
    },
    Receipt: {
        type: String,
        
    },
    Price: {
        type: Number,
        
    },
    CostCode: {
        type: String,
        
    },
    ProjectName: {
        type: String,
        
    },
    OwnedBy: {
        type: String,
        
    },
    OwnershipDocument: {
        type: String,
        
    },
    DateOfPurchase: {
        type: String,
        
    },
   
    Comments: { type: [String], default: [] },
    UserComments: { type: [String], default: [] },
 
    

},   {
    timestamps: true
});

const asset = new mongoose.model("asset",assetSchema);

module.exports = asset