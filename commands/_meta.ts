import { initBuilder } from "discord-fp";

export const base = initBuilder();

export const protectedCommands = base.middleware(({ event, next }) => {
    //check permissions

    return next({
        ctx: {
            message: "hello world",
        },
        event,
    });
});
