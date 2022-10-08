const Employee = require("../lib/Employee");

class Engineer extends Employee
{
    constructor(name='',id='',email='',gitHub='')
    {
        super(name,id,email);

        this.gitHub = gitHub;
    }

    getGithub()
    {
        return `The engineer"s GitHub username is ${this.gitHub}`;
    }

    getRole()
    {
        return "Engineer";
    }
}

module.exports = Engineer;