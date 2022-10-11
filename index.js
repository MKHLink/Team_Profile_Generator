const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs= require('fs');
const generateHTML = require('./src/page-template');


let employeeArr = [];

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
        }
    ]);
};

const buildTeam =()=>
{
     inquirer
    .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Engineer','Intern','Finish']
        }
    ]).then(({action})=>{
        if(action == "Engineer")
        {
                
                    promptEngineer()
                    .then(engineerData=>{
                        console.log(engineerData);
                        const engineer = new Engineer(engineerData.name,engineerData.id,engineerData.email,engineerData.github);
                        employeeArr.push(engineer);
                        return buildTeam();
                    });
                }
                else if(action == "Intern")          
                {
                    promptIntern()
                    .then(internData=>{
                        console.log(internData);
                        const intern = new Intern(internData.name,internData.id,internData.email,internData.github);
                        employeeArr.push(intern);
                        return buildTeam();
                    });
                }
        else
        {
          console.log(employeeArr);

          fs.writeFile('./dist/Team_Profile.html',generateHTML(employeeArr),err =>{
            if(err) throw new (err);
            console.log("HTML file complete");
          });
        }
    })
};






const promptEngineer = () =>
{
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter engineer's name",
            validate:nameInput =>{
                if(nameInput)
                {
                    return true;
                }
                else
                {
                    console.log("Please enter engineer's name");
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
                    console.log("Please enter employee ID");
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
                    console.log("Please enter enginner's email address");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name:'github',
            message: "Enter engineer's GitHub username",
            validate:office =>{
                if(office)
                {
                    return true;
                }
                else
                {
                    console.log("Please enter GitHub username");
                    return false;
                }
            }
        }
    ]);
};

const promptIntern = () =>
{
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter intern's name",
            validate:nameInput =>{
                if(nameInput)
                {
                    return true;
                }
                else
                {
                    console.log("Please enter intern's name");
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
                    console.log("Please enter intern's ID");
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
                    console.log("Please enter intern's email address");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name:'school',
            message: "Enter intern's school name",
            validate:office =>{
                if(office)
                {
                    return true;
                }
                else
                {
                    console.log("Please enter school name");
                    return false;
                }
            }
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

    employeeArr.push(manager);
})
.then(buildTeam);