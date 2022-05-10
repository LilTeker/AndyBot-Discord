// Load .env variables on this file
require("dotenv").config();
const dataToJSON = require("./dataToJSON.js");
const { Client, Intents } = require("discord.js");



const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", (e) => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);




//Funcionality
client.on("messageCreate", (msg) => {
    if (msg.content == "Andygod") {
        let quote = dataToJSON.getRandomQuote();
        quote.then(
            (quote) => {
                console.log(quote.id);
                msg.reply(quote.content);
                console.log(`replied to a message from ${msg.author.username} id:${msg.author}`);
            },
            (error) => {
                console.log(error);
            }
        );
    }
});

//https://discord.com/channels/102860784329052160/565213527673929729/970288707380858961
//https://stackoverflow.com/questions/6847697/how-to-return-value-from-an-asynchronous-callback-function
//https://www.includehelp.com/code-snippets/return-a-value-from-a-js-asynchronous-callback-function.aspx