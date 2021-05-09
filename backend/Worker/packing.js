var express = require('express');
var app = express();
var con = require("../config/database.js");
app.use(express.json());
// var mysql = require("mysql");


app.get("/packing", (req, res) => {

    con.query("SELECT order_no, company FROM cust_order where  MONTH(date) >= MONTH(now())-2", function (err, data, fields) {
        if (err) throw err;
        res.send(data);
    });

});

app.post('/packing', (req, res) => {
    const params = req.body;
    order_no = params.order_no;
    length = params.length;
    weight = params.weight;
    date = params.date;

    sql = `INSERT INTO packing
        VALUES(${order_no}, ${length}, ${weight}, '${date}')
        ON DUPLICATE KEY UPDATE
        order_no        =  ${order_no},
        length          =  length         +   ${length},
        weight          =  weight         +   ${weight},
        date            =  '${date}';`

    con.query(sql, (err, rows) => {
        // connection.release()
        if (!err) {
            res.send(`added.`)
        } else {
            console.log(err)
        }
    });

});
app.patch('/status3', (req, res) => {
    const order = parseInt(req.body.order_no);
    console.log(`order = ${order}`)
    con.query(
        "UPDATE cust_order SET status=? WHERE order_no=?",
        [3, order],
        (err, rows) => {
            // connection.release()
            if (!err) {
                res.send(`added.`);
            } else {
                console.log(err);
            }
            console.log("The data from packing table are: \n", rows);
        }
    );
});
module.exports = app
