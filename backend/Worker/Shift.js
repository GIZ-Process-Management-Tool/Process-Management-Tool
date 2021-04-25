
var express = require('express');
var app = express();
var con = require('../config/database.js');
app.use(express.json());


app.post('/shiftInsert', (req, res) => {

    const params = req.body
    con.query('INSERT INTO shift SET ?', params, (err, rows) => {
        if (!err) {
            res.send(`added.`)
        } else {
            console.log(err)
        }

        console.log('The data from repair table are: \n', rows)

    })
});

module.exports = app;