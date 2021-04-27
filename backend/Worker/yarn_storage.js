var express = require('express');
var app = express();
var con = require("../config/database.js");
app.use(express.json());
var mysql = require("mysql");


app.get("/yarn", (req, res) => {

    con.query("SELECT order_no, company FROM cust_order where  MONTH(date) >= MONTH(now())-1", function(err, data, fields) {
        if (err) throw err;
        res.send(data);
    });

});

app.post('/yarn', (req, res) => {

    const params = req.body
    con.query('INSERT INTO yarn_storage SET ?', params, (err, rows) => {
        // connection.release()
        if (!err) {
            res.send(`added.`)
        } else {
            console.log(err)
        }

        console.log('The data from yarn table are: \n', rows)

    });
});

// app.post("/yarn", (req, res) => {
// 	const params = req.body;
// 	con.query("INSERT INTO yarn_storage SET ?", params, (err, rows) => {
// 		// connection.release()
// 		if (!err) {
// 			res.send(`added.`);
// 		} else {
// 			console.log(err);
// 		}

// 		console.log("The data from yarn table are: \n", rows);
// 	});
// });
app.put("/complete", (req, res) => {
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