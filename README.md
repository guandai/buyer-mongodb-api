# MongoDB Project Setup

## Overview
This document provides a step-by-step guide to setting up a MongoDB-based backend project with Express.js and Mongoose. It includes the necessary folder structure and a script to automate the creation of required files and directories.

## Project Structure
```
mongodb-project/
│── config/
│   ├── db.js             # MongoDB connection setup
│── controllers/
│   ├── userController.js # Controller for handling requests
│── models/
│   ├── userModel.js      # Mongoose schema and model
│── routes/
│   ├── userRoutes.js     # Routes for user API
│── repository/
│   ├── userRepository.js # Repository for DB operations
│── .env                  # Environment variables
│── server.js             # Main Express app
│── package.json          # Dependencies
│── README.md             # Project documentation
```

## Automated Setup Script
To automate the creation of the above directory structure and files, use the following Node.js script:

```javascript
const fs = require('fs');
const path = require('path');

// Define project structure
const projectStructure = {
    'mongodb-project': [
        'config/db.js',
        'controllers/userController.js',
        'models/userModel.js',
        'routes/userRoutes.js',
        'repository/userRepository.js',
        '.env',
        'server.js',
        'package.json',
        'README.md'
    ]
};

// Function to create directories and files
const createProjectStructure = (structure) => {
    Object.entries(structure).forEach(([root, files]) => {
        // Create the root directory
        if (!fs.existsSync(root)) {
            fs.mkdirSync(root);
            console.log(`Created directory: ${root}`);
        }

        // Create subdirectories and files
        files.forEach(filePath => {
            const fullPath = path.join(root, filePath);
            const dirPath = path.dirname(fullPath);

            // Ensure the directory exists
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
                console.log(`Created directory: ${dirPath}`);
            }

            // Create an empty file if it doesn't exist
            if (!fs.existsSync(fullPath)) {
                fs.writeFileSync(fullPath, '');
                console.log(`Created file: ${fullPath}`);
            }
        });
    });

    console.log('Project structure created successfully!');
};

// Run the function
createProjectStructure(projectStructure);
```

## How to Use the Script
1. Save the script as `setupProject.js`.
2. Open a terminal and navigate to the folder where the script is located.
3. Run the script with:
   ```sh
   node setupProject.js
   ```
4. The required folders and files will be created automatically.

## Next Steps
After setting up the project structure, install dependencies using:
```sh
cd mongodb-project
npm install express mongoose dotenv body-parser cors nodemon
```

Then, proceed to implement the database connection, controllers, and API routes.

