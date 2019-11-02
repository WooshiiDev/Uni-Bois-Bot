class Command
{
    constructor(meta)
    {
        this.name = meta.name;
        this.alias = meta.alias;
        this.description = meta.description;
    }

    _run()
    {

    }
}

module.exports = Command;
