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

    constructor()
    {
        
    }

    handle(message)
    {
        this._log(message);
    }
}

module.exports = messageHandler;
