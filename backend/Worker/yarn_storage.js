var express = require("express");
var app = express();
var con = require("../config/database.js");
app.use(express.json());
var mysql = require("mysql");

app.post("/yarn", (req, res) => {
	const params = req.body.form;
	const received = req.body.received;
	// const yarn_received = req.body.received; coming from Yarn_storage1 of mansi
	con.query("INSERT INTO yarn_storage SET ?", params, (err, rows) => {
		// connection.release()
		if (!err) {
			res.send(`added.`);
		} else {
			console.log(err);
		}

		console.log("The data from yarn table are: \n", rows);
	});
});

app.get("/yarn", (req, res) => {
	con.query(
		"SELECT order_no, company FROM cust_order where  MONTH(date) >= MONTH(now())-2",
		function (err, data, fields) {
			if (err) throw err;
			res.send(data);
		}
	);
});

app.put("/yarn", (req, res) => {
	const params = parseInt(req.body.order_no);
	con.query(
		"UPDATE tracking1 SET status=? WHERE orderNo=? AND processId=?",
		["true", params, 0],
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
