var express = require('express');
var app = express();
var con = require('../config/database.js');
app.use(express.json());
var mysql = require('mysql');


app.get("/loom_loading_chart", (req, res) => {
    con.query("SELECT order_no, company FROM cust_order where  MONTH(date) >= MONTH(now())-2", function(err, data, fields) {
        if (err) throw err;
        res.send(data);
    });

});

app.post('/loom_loading_chart', (req, res) => {

        const params = req.body
        con.query('INSERT INTO loading_chart SET ?', params, (err, rows) => {
            // connection.release()
            if (!err) {
                res.send(`added.`)
            } else {
                console.log(err)
            }

            console.log('The data from loding chart table are: \n', rows)

        })
});
module.exports = app;