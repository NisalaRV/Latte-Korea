
const mongoose=require('mongoose');
const {Schema} =mongoose;

const reservation=new Schema({

    fullname:{
       type:String,
       required:true
    },
    date:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    numOfPeople:{
        type:Number,
        required:true
    }
});

const Reservation =mongoose.model("Reservation",reservation);
module.exports=Reservation;
