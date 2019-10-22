require("dotenv").config();

global.join = require("path").join;
const client = require(join(process.cwd(), "_client"));

if (!process.env.TOKEN)
    throw new Error("Bot TOKEN is missing in env_vars.");

client.login(process.env.TOKEN)
    .then(function()
    {
        console.log(`Logged in and ready to serve ${client.guilds.size} server${(client.guilds.size === 1) ? "" : "s"}.`);
    })
    .catch(console.error);
