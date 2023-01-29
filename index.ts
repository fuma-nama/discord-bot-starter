import { Client, GatewayIntentBits } from "discord.js";
import { start } from "discord-fp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

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

client.login(
    "OTA3OTU1NzgxOTcyOTE4Mjgz.G5fhpd.MPXULt_RT7YE9FMIfuu_JNRZu4z2FQh1UuPitQ"
);
