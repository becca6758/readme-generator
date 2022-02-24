const inquirer = require('inquirer');

inquirer.prompt (
    [
        {
            type: 'input' , 
            message: 'Project name?' , 
            name: 'projectName'
        },
        {
            type: 'input' , 
            message: 'Project description?' , 
            name: 'projectDescription'
        },
        {
            type: 'input' , 
            message: 'Table of Contents' , 
            name: 'projectTableOfContents'
        },
        {
            type: 'input' , 
            message: 'How to install the project?' , 
            name: 'projectInstallation'
        },
        {
            type: 'input' , 
            message: 'What do use the project for?' , 
            name: 'projectUsage'
        },
        {
            type: 'input' , 
            message: 'Who worked on the project?' , 
            name: 'projectCredit'
        },
        {
            type: 'input' , 
            message: 'Project License' , 
            name: 'projectLicense'
        },
        {
            type: 'input' , 
            message: 'Project badges?' , 
            name: 'projectBadges'
        },
        {
            type: 'input' , 
            message: 'What are the project features?' , 
            name: 'projectFeatures'
        },
        {
            type: 'input' , 
            message: 'How to contribute to the project.' , 
            name: 'projectContribution'
        },
        {
            type: 'input' , 
            message: 'Project tests.' , 
            name: 'projectTest'
        }
    ]
) .then ((answers) => {
    console.log(answers);
});


