var express = require('express');
var app = express();
var con = require('../config/database.js');
app.use(express.json());
var mysql = require('mysql');

app.post('/loomperday/Insert', (req, res) => {
    const Date = req.body.Date
    const sometCharges = req.body.sometCharges
    const dornierCharges = req.body.dornierCharges

    console.log(req.body.Date, req.body.sometCharges, req.body.dornierCharges)
    con.query("INSERT INTO loom_charges(l_date, somet, dornier) VALUES(?, ? ,?)",
    [Date, sometCharges, dornierCharges],
    (err, result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send("Values Inserted");
        }
    });
});

module.exports = app;