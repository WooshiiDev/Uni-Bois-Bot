require("dotenv").config();
global.join = require("path").join;

const client = require(join(process.cwd(), "_client"));

if (!process.env.TOKEN)
    throw new Error("Bot TOKEN is missing in env_vars.");

client.login(process.env.TOKEN)
    .catch(console.error);

client.once("ready", function()
{
    console.log(`Logged in and ready to serve ${client.guilds.size} server${(client.guilds.size === 1) ? "" : "s"}.`);

    client.utils = require(join(process.cwd(), "lib", "utils"));
    client.handlers = require(join(process.cwd(), "lib", "handlers"));
    client.commands = require(join(process.cwd(), "lib", "commands"));

    const msgHandler = new client.handlers.message();
    this.on("message", msgHandler.handle.bind(msgHandler));
});
