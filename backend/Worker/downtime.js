var express = require('express');
var app = express();
var con = require('../config/database.js');
app.use(express.json());
var mysql = require('mysql');

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
app.post('/downtime', (req, res) => {

        const params = req.body
        con.query('INSERT INTO downtime SET ?', params, (err, rows) => {
            if (!err) {
                res.send(`added.`)
            } else {
                console.log(err)
            }

            console.log('The data from downtime table are: \n', rows)

        })
});

module.exports = app;