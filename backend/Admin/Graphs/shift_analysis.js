var express = require('express');
var app = express();
var con = require('../../config/database.js');
app.use(express.json());
var mysql = require('mysql');

app.get("/shift_analysis", (req, res) => {

    let sql = `select 
    shift_analysis.s_date, 
    coalesce(sum(case when shift = 1 then balance end), 0) as b1,
    coalesce(sum(case when shift = 2 then balance end), 0) as b2 
    from shift_analysis 
    group by s_date 
    order by s_date 
    DESC limit 8;`
    con.query(sql, (err, result) => {
      if (err) {
        throw (err)
      } else {
        // console.log(result);
        res.send(result);
      }
    });
  });


module.exports = app