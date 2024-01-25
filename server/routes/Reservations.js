const express =require('express');
const router=express.Router();
const Reservation =require('../models/Reservation.js');

router.route("/save").post((req,res) => {
    const fullname=req.body.fullname;
    const date=req.body.date;
    const phone=req.body.phone;
    const email=req.body.email;
    const time=req.body.time;
    const numOfPeople=req.body.numOfPeople;

    const newReservation =new Reservation({
        fullname,
        date,
        phone,
        email,
        time,
        numOfPeople
    });

    newReservation.save()
        .then(() =>{
            res.json("bokking is successfully...!");
        })
        .catch((err) => {
            res.json(err);
        })
});

module.exports=router;
