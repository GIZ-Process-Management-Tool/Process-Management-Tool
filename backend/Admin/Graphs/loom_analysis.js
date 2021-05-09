var express = require('express');
var app = express();
var con = require('../../config/database.js');
app.use(express.json());
var mysql = require('mysql');

app.get("/loom_analysis/:Date", (req, res) => {
    var selectedDate = req.params.Date;
    if(selectedDate === 'undefined') {
      return;
    }
    con.query("SELECT loom_no, target_rs, rs_generated FROM loom_analysis where l_date = ?", [selectedDate], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log("date in loom analysis backend" + result);
        res.send(result);
      }
    });

  });

module.exports = app