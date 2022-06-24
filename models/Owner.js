const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ownerSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {
    collection: 'owner'
})
module.exports = new mongoose.model('Owner', ownerSchema)