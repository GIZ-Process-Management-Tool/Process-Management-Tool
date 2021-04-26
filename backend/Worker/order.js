// const express = require("express");

// const cors = require("cors");
// var database = require('../config/database');
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

var express = require("express");
var app = express();
var con = require("../config/database.js");
app.use(express.json());
var mysql = require("mysql");

app.post("/order", (req, res) => {
	const allProcess = req.body.process;
	const orderId = req.body.form.order_no;
	console.log(orderId);
	const params = req.body.form;

	con.query("INSERT INTO cust_order SET ?", params, (err, rows) => {
		// connection.release()
		if (!err) {
			res.send(`added.`);
		} else {
			console.log(err);
		}

		console.log("The data from order table are: \n", rows);
	});
	if (allProcess.length > 0) {
		const insert2 = "INSERT INTO tracking1 (orderNo,processId) VALUES (?,?)";
		for (var i = 0; i < allProcess.length; i++) {
			var a = allProcess[i];
			con.query(insert2, [orderId, a], (err, res) => {
				if (err) console.log(err);
			});
		}
	}
});
module.exports = app;
