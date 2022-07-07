const mongoose = require("mongoose")


const ProjectSchema = new mongoose.Schema({
    ProjectName:{
        type: String
    },
    CostCode:{
        type:String
    },
   
    Details:{
        type:String
    },
    Owner:{
        type:String
    }

})

module.exports = new mongoose.model("project",ProjectSchema)