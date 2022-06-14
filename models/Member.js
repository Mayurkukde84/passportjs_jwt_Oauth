const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    Member:{
        type:String,
        require:true,
        unique:true
    }
})

const member = new mongoose.model("member",memberSchema)

module.exports = member