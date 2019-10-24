const Command = require(join(process.cwd(), "lib", "classes", "Command.js"));

class ping extends Command
{
    constructor()
    {
        super({
            name: "ping",
            alias: [ "ping", "pong" ],
            description: "Ping Pong"
        });
    }

    _run(msg)
    {
        return Promise.resolve("Pong!");
    }
}

module.exports = ping;
