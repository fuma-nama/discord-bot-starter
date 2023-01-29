import { Client, GatewayIntentBits } from "discord.js";
import { start } from "discord-fp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

//store your token in environment variable or put it here
const token = process.env["TOKEN"];
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

function resolveDirs(...names: string[]): string[] {
    const currentDir = dirname(import.meta.url);

    return names.map((name) => fileURLToPath(join(currentDir, name)));
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
    start(client, {
        dir: resolveDirs("./commands"),
    });
});

client.login(token);
