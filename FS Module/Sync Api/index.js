import * as fs from "fs";

//creating a folder
fs.mkdirSync("c:\\nodejs\\test\\demo", { recursive: true });

//deleting a folder
fs.rmdirSync("c:\\nodejs\\test\\demo");
