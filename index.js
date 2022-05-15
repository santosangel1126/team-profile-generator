// import packages
const inquirer = require("inquirer");
const fs = require("fs");
// import classes
const Employee = require("./lib/employee");
const Engineer =  require("./lib/Engineer");
const intern = require("./lib/intern");
const Manager = require("./lib/Manager");

//Import HTML templates
const addManagerCard = require(".src/card-manager");
const addEngineerCard = require("./src/card-engineer");
 const addIternCard = require("./src/card-intern");
 const wrapProfileCards = require("./src/card-wrapper");

 const Team = [];

//prompt manager questions
const addManager = [
    {
    name:"role",
    type:"confirm",
    message: "Welcome to Team Profile Generator, Would you like to begin?"
    },
{
    name:"name",
    type:"input",
    message: "Please enter Manager's name:"
},
{
    name:"id",
    type:"input"
    message: "What is your employee ID: (Required)",
    validate: (idInput) => {
        if (idInput) {
            return true;
        } else {
            console.log("Please enter employee ID");
            return false;
        }
    },
},
{
    name: "email",
    type: "input",
    message: "Please enter email address:"
},
{
    name: "officeNumber",
    type: "input",
    message: "Please enter office number: (Required)",
    validate (officeInput) => {
        if (officeInput) {
            return true;
        } else {
            console.log("Please enter office number!");
        }
    }
}
{
    name: "followUp",
    type: "list",
    choices: ['Add Engineer','Add Intern','finished'],
    message: "what would you like to do next?"
}
];

 const addEngineer = [
     {
         name: "name",
         type: "input",
         message: "Please enter engineer's name",
     },
     {
         name:"id",
         type:"input",
         message:"Please enter engineer's ID: (Required)",
         validate: (engId) => {
             if (engId) {
                 return true;
             } else {
                 console.log("Please enter engineer ID");
             }
         },
     },
     
 ]


