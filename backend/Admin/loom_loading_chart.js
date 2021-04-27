var express = require('express');
var app = express();
var con = require('../config/database.js');
app.use(express.json());
var mysql = require('mysql');

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