import { options, slash } from "discord-fp";

export default slash({
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
