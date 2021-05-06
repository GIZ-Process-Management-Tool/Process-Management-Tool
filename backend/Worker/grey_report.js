var express = require("express");
var app = express();
var con = require("../config/database.js");
app.use(express.json());
var mysql = require('mysql');



app.get("/grey_report", (req, res) => {

    con.query("SELECT order_no, company FROM cust_order where  MONTH(date) >= MONTH(now())-2", function(err, data, fields) {
        if (err) throw err;
        res.send(data);
    });

});

app.post('/grey_report', (req, res) => {

        const params = req.body.form
        params["repairable"] = req.body.repairable;
        con.query('INSERT INTO grey SET ?', params, (err, rows) => {
            if (!err) {
                res.send(`added.`)
            } else {
                console.log(err)
            }

            console.log('The data from grey table are: \n', rows)

        })
});

app.post("/grey_report", (req, res) => {
	const params = req.body;
	con.query("INSERT INTO grey SET ?", params, (err, rows) => {
		if (!err) {
			res.send(`added.`);
		} else {
			console.log(err);
		}

		console.log("The data from grey table are: \n", rows);
	});
});
app.put("/grey_report", (req, res) => {
	const order = parseInt(req.body.order_no);
	con.query(
		"UPDATE tracking1 SET status=? WHERE orderNo=? AND processId=?",
		["true", order, 4],
		(err, rows) => {
			// connection.release()
			if (!err) {
				res.send(`added.`);
			} else {
				console.log(err);
			}

			console.log("The data from yarn table are: \n", rows);
		}
	);
});
module.exports = app;
