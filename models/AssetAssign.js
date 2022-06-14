const mongoose = require("mongoose");

const assignSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
    },
    TaskAssign:{
        type:String,
        required:true,
    },
    Descripation:{
        type:String,
        required:true
    },
})

const assign = new mongoose.model("assign",assignSchema);

module.exports = assign