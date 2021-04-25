
var express = require('express');
var app = express();
var con = require('../config/database.js');
app.use(express.json());
app.post('/warping', (req, res) => {

    const params = req.body
    con.query('INSERT INTO warping SET ?', params, (err, rows) => {
        // connection.release()
        if (!err) {
            res.send(`added.`)
        } else {
            console.log(err)
        }

        console.log('The data from warping table are: \n', rows)

    })
});

module.exports = app;