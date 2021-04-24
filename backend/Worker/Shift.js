var express = require('express');
var app = express();
var con = require('../config/database.js');
app.use(express.json());
var mysql = require('mysql');


app.post('/shiftInsert', (req, res) => {
    const Date = req.body.Date
    const TotalPicks = req.body.TotalPicks
    const Loom = req.body.Loom
    console.log(Date, TotalPicks)
    // let sqlInsert = 
    // `INSERT INTO shift(date, order_no, loom_no, shift, total_picks) VALUES(
    //     '${req.body.Date}', 1, 1, 2, '${req.body.TotalPicks}')`;

    con.query("INSERT INTO shift(s_date, loom_no, shift, total_picks) VALUES(?, ?, 1,?)",
    [Date, Loom, TotalPicks],
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