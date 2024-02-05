import * as fs from "fs/promises";

//create and write file
try {
  await fs.writeFile("README.md", "Hello Kash");
} catch (error) {
  console.log("error");
}
