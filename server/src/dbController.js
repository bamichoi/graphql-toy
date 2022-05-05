import fs from "fs";
import { resolve } from "path";
import { stringify } from "querystring";

const basePath = resolve();

const filenames = {
  messages: resolve(basePath, "src/db/messages.json"),
  users: resolve(basePath, "serc/db/users.json"),
};

export const readDB = (target) => {
  try {
    return JSON.parse(fs.readFileSync(filenames[target], "utf-8"));
  } catch (err) {
    console.log(err);
  }
};

export const writeDB = (target, data) => {
  try {
    return fs.writeFileSync(filenames[target], JSON.stringify(data));
  } catch (err) {
    console.log(error);
  }
};
