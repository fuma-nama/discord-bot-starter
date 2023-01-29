import { prisma } from "@/prisma/client.js";
import { options, slash } from "discord-fp";

export default slash({
    description: "Insert data",
    options: {
        value: options.string({
            description: "Value to insert",
            maxLen: 100,
        }),
    },
    async execute({ event, options }) {
        const result = await prisma.test.create({
            data: {
                value: options.value,
            },
        });

        await event.reply(`Inserted data: ${result.value} (${result.id})`);
    },
});
