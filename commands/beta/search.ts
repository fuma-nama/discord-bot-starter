import { prisma } from "@/prisma/client.js";
import { options, slash } from "discord-fp";

export default slash({
    description: "Query text",
    options: {
        query: options.string({
            description: "What to search",
            async autoComplete(e) {
                const entries = await prisma.test.findMany({ take: 10 });

                e.respond(
                    entries.map((item) => ({
                        name: item.id.toString(),
                        value: item.value,
                    }))
                );
            },
        }),
        boolean: options.boolean({
            required: false,
            description: "Example Boolean",
            descriptions: {
                "en-GB": "Example Boolean in English",
            },
        }),
        number: options.number({
            description: "Example number",
            required: false,
        }),
        user: options
            .user({
                description: "Target User",
                required: false,
            })
            .transform((v) => {
                return v?.username;
            }),
    },
    execute: async ({ event, options }) => {
        await event.reply(`Query: ${options.query} by ${options.user}`);
    },
});
