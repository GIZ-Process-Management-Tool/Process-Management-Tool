var express = require("express");
var app = express();
var con = require("../config/database.js");
app.use(express.json());

app.get("/recent", (req, res) => {

    var sql = "SELECT gst , ppc ,quality, rate , date , company , order_no, status  FROM cust_order where status = 1 order by date desc  LIMIT 10";
    con.query(sql, function (err, data) {
        if (err) throw err;
        // console.log(`data = ${data}`);
        res.send(data);
    });
});
app.get("/process", (req, res) => {

    var sql = "SELECT gst , ppc ,quality, rate , date , company , order_no, status  FROM cust_order where status = 2 order by date desc  LIMIT 10";
    con.query(sql, function (err, data) {
        if (err) throw err;
        // console.log(`data = ${data}`);
        res.send(data);
    });
});
app.get("/completed", (req, res) => {

    var sql = "SELECT gst , ppc ,quality, rate , date , company , order_no, status  FROM cust_order where status = 3 order by date desc  LIMIT 10";
    con.query(sql, function (err, data) {
        if (err) throw err;
        // console.log(`data = ${data}`);
        res.send(data);
    });
});

module.exports = app;