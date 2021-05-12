var express = require("express");
var app = express();
var con = require("../config/database.js");
app.use(express.json());
// var mysql = require("mysql");

app.get("/repairing", (req, res) => {
	con.query(
		"SELECT tracking1.orderNo, tracking1.processId, cust_order.company FROM tracking1 INNER JOIN cust_order ON tracking1.orderNo=cust_order.order_no where tracking1.processId=5 AND MONTH(cust_order.date) >= MONTH(NOW())-2",
		function (err, data, fields) {
			if (err) throw err;
			res.send(data);
		}
	);
});

app.post("/repairing", (req, res) => {
	const params = req.body;
	con.query("INSERT INTO repair SET ?", params, (err, rows) => {
		// connection.release()
		if (!err) {
			res.send(`added.`);
		} else {
			console.log(err);
		}

		console.log("The data from repair table are: \n", rows);
	});
});
app.patch("/status", (req, res) => {
	const order = parseInt(req.body.order_no);
	console.log(`order = ${order}`);
	con.query(
		"UPDATE cust_order SET status=? WHERE order_no=?",
		[2, order],
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
app.put("/repairing", (req, res) => {
	const order = parseInt(req.body.order_no);
	con.query(
		"UPDATE tracking1 SET status=?,error='' WHERE orderNo=? AND processId=?",
		["true", order, 5],
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
