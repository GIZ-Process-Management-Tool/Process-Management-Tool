var express = require('express');
var app = express();
var con = require('../../config/database.js');
app.use(express.json());
var mysql = require('mysql');

app.get("/download_loom_analysis", (req, res) => {
  con.query("SELECT * FROM loom_analysis", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/download_shift_analysis", (req, res) => {
    con.query("SELECT * FROM shift_analysis", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.get("/download_shift", (req, res) => {
    con.query("SELECT * FROM shift", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.get("/download_wtti", (req, res) => {
    con.query("SELECT * FROM wtti", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

module.exports = app