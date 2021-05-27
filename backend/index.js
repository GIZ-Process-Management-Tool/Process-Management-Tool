var express = require("express");
var app = express();
var cors = require("cors");
// var mysql = require("mysql");
// var bodyParser = require("body-parser");
// var con = require("./config/database.js");
var port = process.env.PORT || 3006;

//This is to allow our api for cross-origin resource sharing.
app.use(cors());

//This is to allow our api for parsing json
app.use(express.json());

//This is to allow our api to receive data from a client app
app.use(
	express.urlencoded({
		extended: true,
	})
);
// app.use("/", [require("./Admin/card.js")]);

app.use("/", [require("./Admin/cardValue.js")]);

app.use("/", [require("./Worker/target.js")]);

app.use("/", [require("./Worker/loomperday.js")]);
app.use("/", [require("./Worker/shift.js")]);

app.use("/", [require("./Worker/warping.js")]);

app.use("/", [require("./Admin/Graphs/piechart.js")]);

app.use("/", [require("./Admin/Graphs/horizontal_bar_chart.js")]);

app.use("/", [require("./Admin/Graphs/shift_analysis.js")]);

app.use("/", [require("./Admin/Graphs/loom_analysis.js")]);

app.use("/", [require("./Worker/downtime.js")]);

app.use("/", [require("./Worker/error.js")]);

app.use("/", [require("./Worker/downtime.js")]);

app.use("/", [require("./Worker/grey_report.js")]);

app.use("/", [require("./Worker/order.js")]);

app.use("/", [require("./Worker/packing.js")]);

app.use("/", [require("./Worker/repairing.js")]);

app.use("/", [require("./Worker/winding.js")]);

app.use("/", [require("./Worker/yarn_storage.js")]);

app.use("/", [require("./Admin/loom_loading_chart.js")]);

app.use("/", [require("./Admin/Tracking/Timeline")]);

app.use("/", [require("./Admin/wtti.js")]);

app.use("/", [require("./Admin/Report/report.js")]);

app.listen(port, () => {
	console.log(`Listening to the port ${port}`);
});
