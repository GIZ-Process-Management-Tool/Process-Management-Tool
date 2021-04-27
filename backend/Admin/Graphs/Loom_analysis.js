var express = require('express');
var app = express();
var con = require('../../config/database.js');
app.use(express.json());
var mysql = require('mysql');

app.get("/loom_analysis", (req, res) => {

    // const l_date = req.body.l_date;
    // console.log(l_date);
    selectedDate = "2021-03-06"
    con.query("SELECT loom_no, target_rs, rs_generated FROM loom_analysis where l_date = ?", [selectedDate], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });

  });


module.exports = app