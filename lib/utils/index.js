const fs = require("fs");

const modules = fs.readdirSync(__dirname).filter(x => x !== "index.js")
    , out = {};

for (const mod of modules)
    out[mod.replace(".js", "")] = require(join(__dirname, mod));

module.exports = out;
