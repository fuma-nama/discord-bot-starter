import { resolve } from "path";
import { readFileSync } from "fs";

const fonts = new Map<string, Buffer>();

export function getFont(path: string): Buffer {
    if (fonts.has(path)) return fonts.get(path)!;

    console.log("Loading font", path);
    const roboto = readFileSync(resolve(`./assets/${path}`));

    fonts.set(path, roboto);
    return roboto;
}
