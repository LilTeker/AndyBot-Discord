const fs = require("fs");

function getRandomQuote() {

    let promise = new Promise((resolve, reject) => {
        fs.readFile("./andresQuotes/andres_quotes-050522.json", "utf8", (err, data) => {
            if (err) {reject(err)} 
        
            let messagesData = JSON.parse(data); //message data stored here
            resolve(messagesData.messages[Math.floor(Math.random() * messagesData.messages.length)]);
        });
    });

    return promise;
}

module.exports = {
    getRandomQuote: getRandomQuote
};