// import packages
const inquirer = require("inquirer");
const fs = require("fs");
// import classes
const Employee = require("./lib/employee");
const Engineer =  require("./lib/Engineer");
const intern = require("./lib/intern");
const Manager = require("./lib/Manager");

//Import HTML templates
const addManagerCard = require("./src/card-manager");
const addEngineerCard = require("./src/card-engineer");
 const addIternCard = require("./src/card-intern");
 const wrapProfileCards = require("./src/card-wrapper");
const { type } = require("os");
const { profile } = require("console");
const Intern = require("./lib/intern");

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
    type:"input",
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
    message: "Please enter email address:",
},
{
    name: "officeNumber",
    type: "input",
    message: "Please enter office number: (Required)",
    validate: (officeInput) =>  {
        if (officeInput) {
            return true;
        } else {
            console.log("Please enter office number!");
        }
    }
},

{
    name: "followUp",
    type: "list",
    choices: ['Add Engineer','Add Intern','finished'],
    message: "what would you like to do next?"
}
];
// prompt engineer Questions
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
                 return false;
             }
         },
     },
     {
         name:"email",
         type:"input",
         message: "Please enter email address",
     },
     {
         name:"github",
         type:"input",
         message:"Please enter engineers github (Required)",
         validate: (engGit) => {
             if (engGit) {
                 return true;
             } else {
                 console.log("Please enter Github engineers");
                 return false;
             }
         },
     },
     {
         name:"followUp",
         type: "list",
         choices:["Add Engineer","Add Intern","All done"],
         message:"What would you like to do next?",
     },
 ];
//prompt Intern Questions 
const addIntern = [
    {
        name:"name",
        type:"list",
        choices:["Add Engineer","Add Intern","All done"],
        message: "what would you like to do next?",
    },
    {
        name:"School",
        type:"input",
        message:" Please enter school attended: (Required",
        validate: (internSchool) => {
            if (internSchool) {
                return true;
            } else {
                console.log("Please enter school attended!");
                return false;
            }
        },
    },
    {
        name:"followUp",
        type:"list",
        choices:["Add Engineer","Add Intern","All done"],
        message: " what would you like to do next?",
    },
];
// Start initial questions
questions(addManager);

//cycle through questions when members are added 
function questions (questionArr) {
    inquirer
    .prompt(questionArr)
    .then((member) => {
        Team.push(member);

        if (member.followUp === "Add Engineer"){
           questions(addEngineer);
        } else if (member.followUp === "Add Intern") {
            questions(addIntern);
        } else {
            createProfiles(Team);
        }
    })
    .catch((err)  => console.log(err)); 
}

function createProfiles(Team) {
    const profiles = Team.map((member) => {
        const {name,id,email} = member;
        // adding manager
        if (member.hasOwnProperty("github")) {
            const {officeNumber} = member;
            return new Manager(name, id, officeNumber); 
        }
       //adding engineer github required 
       if (member.hasOwnProperty("github")) {
           const {github} =member;
           return new Engineer(name,id,email,github);
       }
       // adding intern  school required 
       if(member.hasOwnProperty("school")) {
           const {school} = member;
           return new Intern(name,id,email,school);
       }
    });
    //generate Html from employees progfiles 
    generateHtml(profiles);
}

function generateHtml(profiles){
    let profileCards ="";
    profiles.forEach(profile => {
        if (profile instanceof Manager){
            const card = addManagerCard(profile);
            profileCards += card;
        } else if (profile instanceof Engineer) {
            const card = addEngineerCard(profile);
            profileCards += card;
        } else if (profile instanceof Intern) {
            const card = addIternCard(profile);
            profileCards += card;
        }
    });

    const newHtml = wrapProfileCards(profileCards);

    writeHtml(newHtml);
}
 // function to write final HTML document in dist folder 
 function writeHtml(newHtml) {
     fs.writeFile("./dist/team-profile.html",newHtml, (err)=>{
         if (err) throw err;
         console.log(" HTML document sucessfully created in the /dist folder");
     });
    };
 
