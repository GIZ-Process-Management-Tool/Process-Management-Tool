var express = require('express');
var app = express();
var con = require('../../config/database.js');
app.use(express.json());
var mysql = require('mysql');

app.get("/shift_analysis", (req, res) => {
    con.query("SELECT s_date, shift, balance FROM shift_analysis order by s_date DESC limit 8", (err, result) => {
      if (err) {
        throw (err)
      } else {
        console.log(result);
      }
    });
  });


module.exports = app