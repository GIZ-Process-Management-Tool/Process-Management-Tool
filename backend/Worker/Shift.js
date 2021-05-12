var express = require("express");
var app = express();
var con = require("../config/database.js");
app.use(express.json());

app.get("/shiftInsert", (req, res) => {
	mysql=`SELECT tracking1.orderNo, tracking1.processId, cust_order.company
		FROM tracking1 INNER JOIN cust_order 
		ON tracking1.orderNo=cust_order.order_no 
		where tracking1.processId=3 
		AND MONTH(cust_order.date) >= MONTH(NOW())-2
		AND tracking1.status = 'false'`;
	con.query(
		mysql,
		function (err, data, fields) {
			if (err) throw err;
			res.send(data);
		}
	);
});

app.post("/shiftInsert", (req, res) => {
	const params = req.body.form;
	console.log(params);
	params["warped_yarn_received"] = req.body.received;
	con.query("INSERT INTO shift SET ?", params, (err, rows) => {
		if (!err) {
			res.send(`added.`);
		} else {
			console.log(err);
		}

		console.log("The data from shift table is: \n", rows);

		console.log("The data from repair table are: \n", rows);
	});
});
app.put("/shiftInsert", (req, res) => {
	const order = parseInt(req.body.order_no);
	con.query(
		"UPDATE tracking1 SET status=?,error='' WHERE orderNo=? AND processId=?",
		["true", order, 3],
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
module.exports = app;
