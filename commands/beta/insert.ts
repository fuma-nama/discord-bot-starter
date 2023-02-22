import { prisma } from "@/prisma/client.js";
import { options } from "discord-fp";
import { protectedCommands } from "../_meta.js";

export default protectedCommands.slash({
    description: "Insert data",
    options: {
        value: options.string({
            description: "Value to insert",
            maxLen: 100,
        }),
    },
    async execute({ event, options, ctx }) {
        const result = await prisma.test.create({
            data: {
                value: options.value,
            },
        });

        await event.reply(
            `Inserted data: ${result.value} (${result.id}) (ctx: ${ctx.message})`
        );
    },
});
