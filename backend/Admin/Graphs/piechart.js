var express = require('express');
var app = express();
var con = require('../../config/database.js');
app.use(express.json());
var mysql = require('mysql');


app.get("/piechart", (req, res) => {
    con.query("SELECT l_date FROM loom_analysis order by l_date DESC limit 1", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.get("/piechart/:date", (req, res) => {
  console.log(req.params.date);
   var selectedDate = req.params.date;
   if(selectedDate === 'undefined'){
    return;
   }
    con.query("SELECT loom_no, total_mtr FROM loom_analysis where l_date = ?", [selectedDate], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log("date in backend " + result);
        res.send(result);
      }
    });
  });

module.exports = app