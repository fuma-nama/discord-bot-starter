import { initBuilder } from "discord-fp";

export const base = initBuilder();

export const safe = base.middleware(({ event, next }) => {
    return next({
        ctx: {
            message: "hello world",
        },
        event,
    });
});
