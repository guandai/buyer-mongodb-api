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
