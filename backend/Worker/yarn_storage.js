var express = require('express');
var app = express();
var con = require("../config/database.js");
app.use(express.json());
var mysql = require("mysql");


app.get("/yarn", (req, res) => {

	con.query("SELECT tracking1.orderNo, tracking1.processId, cust_order.company FROM tracking1 INNER JOIN cust_order ON tracking1.orderNo=cust_order.order_no where tracking1.processId=0;", function (err, data, fields) {
		if (err) throw err;
		res.send(data);
	});

});

app.post('/yarn', (req, res) => {

	const params = req.body.form;
	params["yarn_received"] = req.body.received;
	console.log(params);
	var weight = params.weight;
	var quality = params.quality;
	var order_no = params.order_no;
	var y_date = params.y_date;
	var yarn_received = params.yarn_received;

	mysql = `INSERT INTO yarn_storage
	VALUES(${yarn_received}, ${weight}, '${quality}', ${order_no}, '${y_date}', 0)
	ON DUPLICATE KEY UPDATE
	yarn_received = ${yarn_received},
	weight = weight + ${weight},
	quality = '${quality}',
	y_date = '${y_date}';`

	con.query(mysql, (err, rows) => {
		// connection.release()
		if (!err) {
			res.send(`added.`)
		} else {
			console.log(err)
		}

		console.log('The data from yarn table are: \n', rows)

	});
});

app.patch('/status', (req, res) => {
	const order = parseInt(req.body.order_no);
	console.log(`order = ${order}`)
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

app.put("/yarn", (req, res) => {
	const order = parseInt(req.body.order_no);
	console.log("Hello ", typeof params);
	con.query(
		"UPDATE tracking1 SET status=? WHERE orderNo=? AND processId=?",
		["true", order, 0],
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