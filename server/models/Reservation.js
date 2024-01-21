
const mongoose=require('mongoose');
const {Reservations} =mongoose;

const reservation= new Reservations({
    name:{
       type:String,
       required:true
    },
    date:{
        type:Date,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    time:{
        type:Number,
        required:true
    },
    numOfPeople:{
        type:Number,
        required:true
    }
});

const Reservation=mongoose.models("Reservation",reservation);
module.exports=Reservation;
