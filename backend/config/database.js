const mysql = require('mysql');

const con = mysql.createConnection({
<<<<<<< Updated upstream
    host: "localhost",
    user: "root",
    password: "",
    database: "vatantextile1"
=======
	host: "localhost",
	user: "root",
	password: "admin1",
	database: "vatan textile",
>>>>>>> Stashed changes
});

con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to databse !!');

});

module.exports = con;