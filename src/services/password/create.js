import chalk from "chalk";
import prompt from "prompt";
import promptSchemaPassword from "../../prompts-schema/prompt-schema-password.js";
import handle from "./handle.js";

async function createPassword() {
  prompt.get(promptSchemaPassword, handle);
  prompt.start();
}

export default createPassword;