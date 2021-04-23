var express = require('express');
var app = express();
var con = require('../../config/database.js');
app.use(express.json());
var mysql = require('mysql');

app.get("/piechart", (req, res) => {

    const Date = "2021-03-06";
    const Shift = 1;
    console.log(Date, Shift)

    con.query("SELECT loom_no, total_picks FROM shift where s_date = ? AND shift = ?", [Date, Shift], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });


module.exports = app