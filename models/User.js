const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required : true,
        min:6,
        max:15
    },
    password: {
        type : "String",
        require : true
    },
    role : {
        type : String,
        enum : ['user' , 'admin'],
        required : true
    },
    profile :{
        type:"String",
        require:true
    },
    table: [{ type: mongoose.Schema.Types.ObjectId, ref: "Table"}]
})


UserSchema.pre('save', function(next){   //use regular function other wise you get 
    if(!this.isModified('password'))     // check user password is hashed or not if user update password then we hav to hashed passqord
    return next()
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err)
            return next(err);
            this.password = passwordHash;
            next();

    });

});

UserSchema.methods.comparePassword = function(password,cb){  //compare password bcrypt and users
        bcrypt.compare(password,this.password,(err,isMatch) => {
            if(err)
            return cb(err);
        else{
            if(!isMatch)
                return cb(null, isMatch);
            return cb(null, this);
        }
        });
}  

module.exports = mongoose.model('user',UserSchema)
