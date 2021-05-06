var express = require('express');
var app = express();
var con = require('../config/database.js');
app.use(express.json());


app.post('/target', (req, res) => {

    const params = req.body;
    params["total_mtr"] = 0;
    params["total_picks"] = 0;
    params["balance"] = 0;
    console.log(params);
    con.query('INSERT INTO shift_analysis SET ?', params, (err, rows) => {
        if (!err) {
            res.send(`added.`)
        } else {
            console.log(err)
        }

        console.log('The data from shift_analysis table is: \n', rows)

    })
});


module.exports = app;