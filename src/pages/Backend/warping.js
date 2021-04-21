const express = require("express");

const cors = require("cors");
var database = require('../../../sql/database');
const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);
app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});
app.post('/warping', (req, res) => {

    database.getConnection((err, connection) => {
        if (err) throw err

        const params = req.body
        connection.query('INSERT INTO warping SET ?', params, (err, rows) => {
            connection.release()
            if (!err) {
                res.send(`added.`)
            } else {
                console.log(err)
            }

            console.log('The data from warping table are: \n', rows)

        })
    })
});

app.listen(port, () => {
    console.log("Listening..........");
});