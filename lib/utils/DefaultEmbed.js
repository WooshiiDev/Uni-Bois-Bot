const { RichEmbed } = require("discord.js")
    , randColor = require(join(__dirname, "generateRandomColor.js"));

class DefaultEmbed extends RichEmbed
{
    constructor(data)
    {
        super(data);

        this.setColor(randColor())
            .setTimestamp(new Date());
    }
}

module.exports = DefaultEmbed;
