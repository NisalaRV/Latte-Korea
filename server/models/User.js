
const mongoose=require('mongoose');
const  {Schema} =mongoose;

const userSchema = new Schema({

    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    nic:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   conformpassword:{
        type:String,
        required:true
    }
});
const  User=mongoose.models("User",userSchema);
module.exports=User;
