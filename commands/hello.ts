import { options } from "discord-fp";
import { base } from "./_meta.js";

export default base.slash({
    description: "Say Hello to you",
    options: {
        name: options
            .string({
                description: "Your name",
            })
            .transform((v) => {
                return `Mr.${v}`;
            }),
    },
    execute: async ({ event, options }) => {
        await event.reply(`Hello! ${options.name}`);
    },
});
