class Employee
{
    constructor(name='',id='',email='')
    {
        this.name = name;
        this.id=id;
        this.email=email;
    }

    getName()
    {
        return `The name of the employee is ${this.name}`;
    }

    getId()
    {
        return `The ID of the employee is ${this.id}`;
    }

    getEmail()
    {
        return `The email of the employee is ${this.email}`;
    }

    getRole()
    {
        return "Employee";
    }
}


module.exports = Employee;