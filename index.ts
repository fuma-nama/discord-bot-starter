import { Client, GatewayIntentBits } from "discord.js";
import { start } from "discord-fp";
import "dotenv/config";

//store your token in environment variable or put it here
const token = process.env["TOKEN"];
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);

    start(client, {
        load: ["./commands"],
    });
});

client.login(token);
