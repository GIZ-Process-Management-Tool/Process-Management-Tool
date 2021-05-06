var express = require('express');
var app = express();
var con = require('../../config/database.js');
app.use(express.json());
var mysql = require('mysql');

app.get("/horizontalBchart", (req, res) => {

  sql = `select 
  s_date, 
  coalesce(sum(case when shift = 1 then total_picks end), 0) as tp1,
  coalesce(sum(case when shift = 2 then total_picks end), 0) as tp2 
  from shift_analysis 
  group by s_date 
  order by s_date 
  DESC limit 8;`

    con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


module.exports = app;