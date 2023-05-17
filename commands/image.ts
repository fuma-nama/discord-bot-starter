import { command } from "@/utils/dfp.js";
import { options } from "@discord-fp/djs";
import { getFont } from "@/utils/font-handler.js";
import { unstable_createNodejsStream } from "@vercel/og";

export default command.slash({
    description: "Create image",
    options: {
        text: options.string({ description: "Content" }),
    },
    async execute({ event, options }) {
        const image = await unstable_createNodejsStream(
            {
                key: "",
                type: "div",
                props: {
                    style: {
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        background: "linear-gradient(to top, #0C134F, #1D267D)",
                        color: "#D4ADFC",
                    },
                    children: [
                        {
                            type: "p",
                            props: {
                                style: {
                                    fontSize: "4rem",
                                    fontWeight: "600",
                                    margin: 0,
                                },
                                children: "Hello World",
                            },
                        },
                        {
                            type: "p",
                            props: {
                                style: {
                                    fontSize: "2rem",
                                },
                                children: options.text,
                            },
                        },
                    ],
                },
            },
            {
                width: 500,
                height: 250,
                fonts: [
                    {
                        name: "Roboto",
                        data: getFont("roboto.ttf"),
                        weight: 400,
                    },
                    {
                        name: "Roboto",
                        data: getFont("roboto-bold.ttf"),
                        weight: 600,
                    },
                ],
            }
        );

        await event.reply({
            embeds: [
                {
                    title: options.text,
                    description: `Insane image created by ${event.user.username}`,
                    image: {
                        url: "attachment://image.png",
                    },
                },
            ],

            files: [
                {
                    name: "image.png",
                    attachment: image,
                },
            ],
        });
    },
});
