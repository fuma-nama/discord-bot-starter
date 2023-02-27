import { initDiscordFP } from "discord-fp";
import { client } from "./discord.js";

export const dfp = initDiscordFP({
    client,
});

export const command = dfp.command;

export const protectedCommand = dfp.command.middleware(({ event, next }) => {
    //check permissions

    return next({
        ctx: {
            message: "hello world",
        },
        event,
    });
});
