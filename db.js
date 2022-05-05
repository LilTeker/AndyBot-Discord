require("dotenv").config();
const mysql = require("mysql");

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

function getRandomQuote() {
    let promise = new Promise(function (resolve, reject) {
        conn.query("SELECT * FROM quotes ORDER BY RAND() LIMIT 1", (err, result, fields) => {
            if (err) reject(err);
            console.log(result[0].quote); //result es un "array" result[0].quote nos da el texto
            resolve(result);
        });
    });

    return promise;
}

module.exports = {
    conn: conn,
    getRandomQuote: getRandomQuote
};