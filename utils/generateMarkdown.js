// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license || license === 'None') {
      return '';
    }
    
    const badges = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    };
    
    return badges[license] || '';
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (!license || license === 'None') {
      return '';
    }
    
    const links = {
      'MIT': '[MIT License](https://opensource.org/licenses/MIT)',
      'Apache 2.0': '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)',
      'GPL 3.0': '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)',
      'BSD 3-Clause': '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)'
    };
    
    return links[license] || '';
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license || license === 'None') {
      return '';
    }
    
    return `## License
  
  This project is covered under the ${renderLicenseLink(license)}.`;
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  ${data.license && data.license !== 'None' ? '- [License](#license)\n' : ''}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  \`\`\`
  ${data.tests}
  \`\`\`
  
  ## Questions
  
  For questions or concerns, please contact me at [${data.email}](mailto:${data.email}).
  
  You can also find more of my work on my GitHub profile: [${data.github}](https://github.com/${data.github})
  `;
  }
  
  export default generateMarkdown;