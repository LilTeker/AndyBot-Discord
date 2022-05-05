require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

conn.connect((err) => {
    if (err) throw err;
    console.log("connection successful");
});

fs.readFile("./andresQuotes/andres_quotes-050522.json", "utf8", (err, data) => {
    if (err) {console.error(err); return;} 

    console.log(JSON.parse(data)); //message data stored here


});