require("dotenv").config();
const mysql = require("mysql");

const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

/* function getQuote(conn) {
    conn.query("SELECT * FROM quotes ORDER BY RAND() LIMIT 1", (err, result, fields) => {
        if (err) throw err;
        console.log(result); //result es un "array" result[0].quote nos da el texto
    });
} */

conn.connect((err) => {
    if (err) throw err;
    console.log("connection successful");
    getQuote();
});



//  err originates here 
module.exports.getQuote = (conn) => {
    conn.query("SELECT * FROM quotes ORDER BY RAND() LIMIT 1", (err, result, fields) => {
        if (err) throw err;
        console.log(result); //result es un "array" result[0].quote nos da el texto
    });
};

module.exports.conn = conn;