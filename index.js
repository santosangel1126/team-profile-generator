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
const addEngineerCard = require("./lib/card-engineer");
 const addIternCard = require("./lib/card")

//prompt manager questions
const addManager = {
    name:"role",
    type:"confirm",
    message: "Welcome to Team Profile Generator, Would you like to begin?",
},
{
    name:"name",
    type:"input",
    message: "Please enter Manager's name:"
},
