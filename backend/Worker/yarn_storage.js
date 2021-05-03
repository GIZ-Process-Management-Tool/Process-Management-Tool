// const express = require("express");

// const cors = require("cors");
// var database = require('../../../sql/database');
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

app.post("/yarn", (req, res) => {
	const params = req.body;
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

	con.query("SELECT order_no, company FROM cust_order", function (err, data, fields) {
		if (err) throw err;
		res.send(data);
	});

});
app.put("/yarn", (req, res) => {
	const params = parseInt(req.body.orderNo);
	console.log("Hello ", typeof params);
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
