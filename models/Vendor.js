const mongoose = require("mongoose")

const VendorSchema = new mongoose.Schema({

    id :{
        type:"Number",
        required:true
    },
    VendorID:{
        type:"Number",
        required:true
    },
   
    VendorName:{
        type : "String",
        required : true,
        unique:true
    },
    PhoneNumber:{
        type:"Number",
        required: true
    },
    GSTNumber:{
        type: "Number",
        required: true
    },
    VendorType:{
        type:"String",
        required: true
    },
    BankAccountDetails:{
        type:"String",
        required: true
    },
    Address:{
        type: "String",
        required: true
    }

})

const vendor= new mongoose.model("vendor",VendorSchema)

module.exports = vendor