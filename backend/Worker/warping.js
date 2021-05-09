var express = require("express");
var app = express();
var con = require("../config/database.js");
app.use(express.json());

app.get("/warping", (req, res) => {
	con.query(
		"SELECT tracking1.orderNo, tracking1.processId, cust_order.company FROM tracking1 INNER JOIN cust_order ON tracking1.orderNo=cust_order.order_no where tracking1.processId=2",
		function (err, data, fields) {
			if (err) throw err;
			res.send(data);
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
app.post("/warping", (req, res) => {
	const params = req.body;
	var order_no = params.order_no;
	var date = params.date;
	var weight_o_w_y = params.weight_o_w_y;
	var waste_weight = params.waste_weight;
	var package_defect = params.package_defect;

	const sql = `INSERT INTO warping
    VALUES(${order_no}, '${date}', ${weight_o_w_y}, ${waste_weight},
    '${package_defect}')
    ON DUPLICATE KEY UPDATE
    weight_o_w_y    =   weight_o_w_y + ${weight_o_w_y},
    waste_weight    =   waste_weight + ${waste_weight},
    order_no        =   ${order_no},
    date            =   '${date}',
    package_defect  =   '${package_defect}';`;

	con.query(sql, (err, rows) => {
		// connection.release()
		console.log(params);
		if (!err) {
			res.send(`added.`);
		} else {
			console.log(err);
		}
		console.log("The data from warping table are: \n", rows);
	});
});
app.put("/warping", (req, res) => {
	const order = parseInt(req.body.order_no);
	con.query(
		"UPDATE tracking1 SET status=?,error='' WHERE orderNo=? AND processId=?",
		["true", order, 2],
		(err, rows) => {
			// connection.release()
			if (!err) {
				res.send(`added.`);
			} else {
				console.log(err);
			}

			// console.log("The data from yarn table are: \n", rows);
		}
	);
});
module.exports = app;
