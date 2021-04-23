// const express = require("express");

// const cors = require("cors");
// var database = require('../../../config/database');
// const app = express();
// const port = 5000 || process.env.PORT;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         credentials: true,
//     })
// );
// app.get("/", (req, res) => {
//     res.send("<h1>Hello world</h1>");
// });

var express = require('express');
var app = express();
var con = require('../config/database.js');
app.use(express.json());
var mysql = require('mysql');

app.post('/packing', (req, res) => {

        const params = req.body
        con.query('INSERT INTO packing SET ?', params, (err, rows) => {
            // connection.release()
            if (!err) {
                res.send(`added.`)
            } else {
                console.log(err)
            }

            console.log('The data from yarn table are: \n', rows)

        })
});
module.exports = app;
