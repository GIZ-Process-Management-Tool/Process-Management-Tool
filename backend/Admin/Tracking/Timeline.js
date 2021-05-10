var express = require("express");
var app = express();
var con = require("../../config/database.js");
app.use(express.json());
var mysql = require("mysql");

app.get("/processBarOrders", (req, res) => {
	con.query(
		"SELECT order_no, company FROM cust_order where  MONTH(date) >= MONTH(now())-2",
		function (err, data, fields) {
			if (err) throw err;
			res.send(data);
		}
	);
});
app.get("/processBar/:orderNo", (req, res) => {
	const order = req.params.orderNo;
	con.query(
		"SELECT * FROM tracking1 where orderNo=?",
		order,
		function (err, data, fields) {
			if (err) throw err;
			res.send(data);
		}
	);
});

module.exports = app;
