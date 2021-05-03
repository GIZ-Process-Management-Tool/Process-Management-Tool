var express = require("express");
var app = express();
var con = require("../config/database.js");
app.use(express.json());
var mysql = require("mysql");

app.get("/cardValue", (req, res) => {
    let got = req.params.orderNo;

    var sql = "SELECT gst , ppc ,quality, rate , date , company , order_no, status  FROM cust_order order by date desc  LIMIT 10";
    con.query(sql, function (err, data, fields) {
        if (err) throw err;
        // console.log(`data = ${data}`);
        res.send(data);
    });


});

module.exports = app;