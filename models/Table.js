const mongoose = require('mongoose');


const TableSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
})
module.exports = mongoose.model('Table',TableSchema)