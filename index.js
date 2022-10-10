const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const promptManager = () =>{
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter manager"s name',
            validate:nameInput =>{
                if(nameInput)
                {
                    return true;
                }
                else
                {
                    console.log("Please enter your name");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'Type employee ID',
            validate:workID =>{
                if(workID)
                {
                    return true;
                }
                else
                {
                    console.log("Please enter your employee ID");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter email address',
            validate:email =>{
                if(email)
                {
                    return true;
                }
                else
                {
                    console.log("Please enter your email address");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name:'office',
            message: 'Enter your office number',
            validate:office =>{
                if(office)
                {
                    return true;
                }
                else
                {
                    console.log("Please enter your office number");
                    return false;
                }
            }
        },

        {
            type: 'list',
            name: 'action',
            message: 'What woould you like to do?',
            choices: ['Enginner','Intern','Finish']
        }
    ]);
};

promptManager()
.then(managerData=>{
    console.log(managerData);
    const manager = new Manager(managerData.name,managerData.id,managerData.email,managerData.office);

    console.log(manager.getName());
    console.log(manager.getId());
    console.log(manager.getEmail());
    console.log(manager.getRole());

    if(managerData.action == 'Engineer')
    {
        console.log("added engineer");
    }
    else if(managerData.action == 'Intern')
    {
        console.log('Added Intern');
    }
    else
    {
       console.log("Finished");
    }
});