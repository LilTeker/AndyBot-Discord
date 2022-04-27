// Load .env variables on this file
require("dotenv").config();

//
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
    if (msg.content == "que onda wacho") {
        msg.reply("Practicando los pasos prohibidos weon");
        console.log(`replied to a message from ${msg.author.username} id:${msg.author}`);
    }
});