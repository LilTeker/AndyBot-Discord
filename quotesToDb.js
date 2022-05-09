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

    let messagesData = JSON.parse(data); //message data stored here
    console.log(messagesData.messages[0].content);

    for (let i = 0; i < messagesData.messages.length; i++) {
        
        conn.query(`INSERT INTO quotes (quote) VALUES (?)`, messagesData.messages[i].content, (err, result) => {
            if (err) {console.error(messagesData.messages[i].id); throw err;}
            console.log("Number of added rows: " + i);
        });
        
    }
    conn.end();
});