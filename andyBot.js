// Load .env variables on this file
require("dotenv").config();
const conn = require("./db.js");
const { Client, Intents } = require("discord.js");
console.log(conn);



const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", (e) => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);




//Funcionality
client.on("messageCreate", (msg) => {
    if (msg.content == "que onda wacho") {
        let quote = conn.getRandomQuote();
        quote.then(
            (result) => {
                msg.reply(result[0].quote);
                console.log(`replied to a message from ${msg.author.username} id:${msg.author}`);
            },
            (error) => {
                console.log(error);
            }
        );
    }
});


//Load the quotes at start and print them from an array. TO BE DONE


//function that uses mysql query callback based library and wraps it on a promise to pass the value to another function
/* function getQuote(conn) {
    let promise = new Promise(function (resolve, reject) {
        conn.query("SELECT * FROM quotes ORDER BY RAND() LIMIT 1", (err, result, fields) => {
            if (err) reject(err);
            console.log(result[0].quote); //result es un "array" result[0].quote nos da el texto
            resolve(result);
        });
    });

    return promise;
} */



//https://discord.com/channels/102860784329052160/565213527673929729/970288707380858961
//https://stackoverflow.com/questions/6847697/how-to-return-value-from-an-asynchronous-callback-function
//https://www.includehelp.com/code-snippets/return-a-value-from-a-js-asynchronous-callback-function.aspx