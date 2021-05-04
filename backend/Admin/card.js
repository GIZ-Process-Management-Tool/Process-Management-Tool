var express = require("express");
var app = express();
var con = require("../config/database.js");
app.use(express.json());
var mysql = require("mysql");

app.get("/card", (req, res) => {

    con.query("SELECT orderNo , status FROM tracking", function(err, data, fields) {
        if (err) throw err;
        res.send(data);
    });

});

module.exports = app;