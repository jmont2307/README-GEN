// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs/promises';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            // Simple email validation
            const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput);
            if (valid) {
                return true;
            } else {
                console.log('Please enter a valid email!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
    try {
        console.log('Welcome to the Professional README Generator!');
        console.log('Please answer the following questions to generate your README.md file.');
        
        // Prompt user for inputs
        const userResponses = await inquirer.prompt(questions);
        
        // Generate markdown content based on user answers
        const markdown = generateMarkdown(userResponses);
        
        // Write markdown to README.md file
        await writeToFile('README.md', markdown);
        
        console.log('README.md file has been successfully generated!');
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

// Function call to initialize app
init();