import * as fs from "fs";

// Using the Callback

fs.mkdir("c:\\nodejs", (error) => {
  if (error) throw error;
  console.log("Folder created...");
});
