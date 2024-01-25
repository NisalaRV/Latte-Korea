const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

//save
router.route("/save").post((req, res) => {
    const fullname=req.body.fullname;
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const nic = req.body.nic;
    const password = req.body.password;


    const newUser = new User({
        fullname,
        username,
        email,
        phone,
        nic,
        password

    });

    newUser.save()
        .then(() => {
            res.json("User is Saved..!");
        })
        .catch((err) => {
            res.json(err);
        })
});



module.exports =router;
