const client = require(join(process.cwd(), "_client"));

class messageHandler
{
    _log(msg)
    {
        const time = msg.createdAt.toUTCString()
            , content = `${msg.member ? msg.member.displayName : msg.author.username}: "${msg.cleanContent}"`
            , location = msg.guild ?
                `{${msg.guild.name}} [#${msg.channel.name}]` :
                `@${msg.channel.recipient.tag}`;

        console.log("\n" + time + "\n" + content + "\n" + location);
    }

    _siphonCommand(string)
    {
        let split = string.split(" ");
        if (split[0].startsWith(process.env.PREFIX))
        {
            let commandName = split[0].slice(process.env.PREFIX.length).toLowerCase()
                , command = null;
            for (const c in client.commands)
            {
                const cmd = client.commands[c];
                if (cmd.alias.some(a => a === commandName))
                {
                    command = cmd;
                    break;
                }
            }

            return command;
        }

        return null;
    }

    _siphonArgs(string)
    {
        return string.split(" ").slice(1);
    }

    _executeCommand(msg)
    {
        if (!msg.command)
            return;

        msg.command._run(msg)
            .then(function(res)
            {
                if (!res)
                    return;

                msg.channel.send(res);
            }).catch(function(err)
            {
                if (!err)
                    return;

                console.error(err);

                msg.channel.send(new client.utils.DefaultEmbed()
                    .setAuthor("Error")
                    .setDescription(err)
                ).catch(console.error);
            });
    }

    constructor()
    {
        
    }

    handle(message)
    {
        this._log(message);

        message.command = this._siphonCommand(message.content);
        message.args = this._siphonArgs(message.content);

        this._executeCommand(message);
    }
}

module.exports = messageHandler;
