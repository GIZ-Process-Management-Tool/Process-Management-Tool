var express = require("express");
var app = express();
var con = require("../config/database.js");
app.use(express.json());

app.patch("/error", (req, res) => {
	const { order_no, processId, remarks } = req.body.form;
	var currTD = new Date();
	// var dateTime =
	// 	currTD.toISOString().slice(0, 10) + " " + currTD.toTimeString().slice(0, 8);
	var time = currTD.toTimeString().slice(0, 8);
	// console.log(order_no, processId, remarks);
	const sql =
		"UPDATE tracking1 SET error=?,time=? where orderNo=? AND processId=?";
	con.query(sql, [remarks, time, order_no, processId], (err, rows) => {
		if (!err) {
			res.send(`added.`);
		} else {
			console.log(err);
		}
	});
});
module.exports = app;
