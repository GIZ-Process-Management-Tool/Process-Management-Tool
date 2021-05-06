
var express = require('express');
var app = express();
var con = require('../config/database.js');
app.use(express.json());


app.get("/getWtti", (req, res) => {

    con.query("SELECT w_date, target_asDate, achieved_asDate, balance_asDate from wtti order by w_date DESC limit 1;", function(err, data, fields) {
        if (err) throw err;
        else {
        res.send(data);
        }
    });

});


module.exports = app;