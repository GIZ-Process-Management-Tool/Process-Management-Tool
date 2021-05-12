var express = require('express');
var app = express();
var con = require('../config/database.js');
app.use(express.json());
var mysql = require('mysql');


app.get("/loom_loading_chart", (req, res) => {
    con.query("SELECT tracking1.orderNo, tracking1.processId, cust_order.company FROM tracking1 INNER JOIN cust_order ON tracking1.orderNo=cust_order.order_no where tracking1.processId=3 AND MONTH(cust_order.date) >= MONTH(NOW())-2", function (err, data) {
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