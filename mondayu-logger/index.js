import { Console } from "console";
import { createWriteStream, write } from "fs";

export const mondayuLogger = new Console({
	stdout: write("log.txt", { flags: "a" }),
});
