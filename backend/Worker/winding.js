var express = require('express');
var app = express();
var con = require("../config/database.js");
app.use(express.json());
var mysql = require('mysql');


app.get("/winding", (req, res) => {

    con.query("SELECT order_no, company FROM cust_order where  MONTH(date) >= MONTH(now())-2", function(err, data, fields) {
        if (err) throw err;
        res.send(data);
    });

});

app.post('/winding', (req, res) => {

        const params            = req.body.form
        params["yarn_received"] = req.body.received;
        yarn_received           = params.yarn_received;
        no_of_cones             = params.no_of_cones;
        size_of_cones           = params.size_of_cones;
        no_of_doffs             = params.no_of_doffs;
        weight_of_cones         = params.weight_of_cones;
        weight_of_waste         = params.weight_of_waste;
        order_no                = params.order_no;
        date                    = params.date;
        package_defect          = params.package_defect;

        sql = `INSERT INTO winding
        VALUES(${yarn_received}, ${no_of_cones}, ${size_of_cones}, ${no_of_doffs},
        ${weight_of_cones}, ${weight_of_waste}, ${order_no}, '${date}', '${package_defect}')
        ON DUPLICATE KEY UPDATE
        yarn_received   =   ${yarn_received},
        no_of_cones     =   no_of_cones         +   ${no_of_cones},
        size_of_cones   =   size_of_cones       +   ${size_of_cones},
        no_of_doffs     =   no_of_doffs         +   ${no_of_doffs},
        weight_of_cones =   weight_of_cones     +   ${weight_of_cones},
        weight_of_waste =   weight_of_waste     +   ${weight_of_waste},
        order_no        =   ${order_no},
        date            =   '${date}',
        package_defect  =   '${package_defect}';`


        con.query(sql,(err, rows) => {
            if (!err) {
                res.send(`added.`)
            } else {
                console.log(err)
            }

            console.log('The data from yarn table are: \n', rows);

        });

    });

app.put("/winding", (req, res) => {
	const order = parseInt(req.body.order_no);
	con.query(
		"UPDATE tracking1 SET status=? WHERE orderNo=? AND processId=?",
		["true", order, 1],
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
