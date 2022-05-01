// Load .env variables on this file
require("dotenv").config();
const conn = require("./db.js");
const { Client, Intents } = require("discord.js");


const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", (e) => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);




//Funcionality

client.on("messageCreate", async (msg) => {
    if (msg.content == "que onda wacho") {
        //msg.reply("Practicando los pasos prohibidos weon");
        //console.log(`replied to a message from ${msg.author.username} id:${msg.author}`);
        console.log(await getQuote(conn));
    }
});


//Load the quotes at start and print them from an array.




async function getQuote(conn) {
    let quote = await conn.query("SELECT * FROM quotes ORDER BY RAND() LIMIT 1", (err, result, fields) => {
        if (err) throw err;
        console.log(result[0].quote); //result es un "array" result[0].quote nos da el texto
        return result;
    });
    /* let quote = await conn.query("SELECT * FROM quotes ORDER BY RAND() LIMIT 1");
    return quote; */
}



//https://discord.com/channels/102860784329052160/565213527673929729/970288707380858961