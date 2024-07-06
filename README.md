# Hospital Management System

A web application for managing hospital operations including patient records, doctor management, and admin functionalities. Built with React and Tailwind CSS, it features different dashboards for patients, doctors, and admins.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Hospital Management System provides an intuitive interface for patients, doctors, and admins to manage and access hospital data securely. Patients can view their health records, doctors can manage patient data, and admins can manage users.

## Features

- **Patient Dashboard**: View personal health records, profile image, and provide feedback on hospital services.
- **Doctor Dashboard**: Search for patient records, view and update patient data.
- **Admin Dashboard**: Manage user accounts (add new patients, doctors, and admins).

## Technologies

- **Frontend**: React, Tailwind CSS
- **Backend**: JSON Server (for development)
- **State Management**: Context API
- **Authentication**: JWT (JSON Web Token)

## Setup

### Prerequisites

- Node.js (version 16 or later)
- npm (version 6 or later)
- json-server (for mock backend)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Nyandiekahh/Hospital-Management-system.git
   cd hospital-management-system
   ```

2. Install dependencies:

   ```bash
   npm install
   npm install jwt-decode
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. Configure Tailwind CSS:

   Add the following lines to your `tailwind.config.js`:

   ```javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. Add Tailwind CSS directives to `src/styles/App.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   .login-container {
     @apply max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg text-center;
   }

   .login-selection h2 {
     @apply mb-4;
   }

   .login-selection button {
     @apply w-full py-2 mb-2 bg-blue-600 text-white rounded hover:bg-blue-700;
   }

   .login-form h2 {
     @apply mb-4;
   }

   .login-form input {
     @apply w-full p-2 mb-4 border border-gray-300 rounded;
   }

   .login-form button {
     @apply w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700;
   }

   .dashboard {
     @apply p-6 bg-white shadow-lg rounded-lg;
   }

   .profile {
     @apply flex items-center space-x-4;
   }

   .profile-image {
     @apply w-24 h-24 rounded-full object-cover;
   }

   .table {
     @apply w-full border-collapse;
   }

   .table th, .table td {
     @apply border border-gray-300 px-4 py-2 text-left;
   }

   .table th {
     @apply bg-gray-200;
   }
   ```

5. Set up the JSON server:

   Create a `db.json` file in the `src/data` directory with the following content:

   ```json
   {
     "users": [
       {
         "role": "patient",
         "name": "John Doe",
         "birthCertNumber": "87654321",
         "password": "patient",
         "dateOfBirth": "1990-01-01",
         "age": 34,
         "hospitalBorn": "Nairobi Hospital",
         "medicalHistory": [
           {
             "date": "2024-01-01",
             "sickness": "Flu",
             "doctor": "Dr. Smith",
             "hospital": "Kenyatta National Hospital",
             "prescribedMedicine": "Medicine A",
             "testResults": "Negative",
             "feedback": {
               "waitTime": 4,
               "cleanliness": 5,
               "etiquette": 5
             }
           },
           {
             "date": "2023-12-01",
             "sickness": "Cold",
             "doctor": "Dr. Johnson",
             "hospital": "Nairobi Hospital",
             "prescribedMedicine": "Medicine B",
             "testResults": "Negative",
             "feedback": {
               "waitTime": 3,
               "cleanliness": 4,
               "etiquette": 4
             }
           }
         ],
         "image": "https://via.placeholder.com/150"
       },
       {
         "role": "doctor",
         "medicalID": "12345678",
         "password": "doctor",
         "name": "Dr. Smith"
       },
       {
         "role": "admin",
         "username": "admin",
         "password": "admin"
       }
     ]
   }
   ```

### Running the Application

1. Start the JSON server:

   ```bash
   json-server --watch src/data/db.json --port 3001
   ```

2. Start the React application:

   ```bash
   npm start
   ```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes this tool and copies build dependencies, configuration files, and scripts into the app directory.

## Project Structure

```plaintext
hospital-management-system/
├── public/
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── PatientDashboard.js
│   │   ├── DoctorDashboard.js
│   │   ├── AdminDashboard.js
│   │   ├── ResetPassword.js
│   ├── context/
│   │   ├── AuthContext.js
│   ├── data/
│   │   ├── db.json
│   ├── styles/
│   │   ├── App.css
│   ├── App.js
│   ├── AppRoutes.js
│   ├── index.js
├── .gitignore
├── package.json
├── README.md
```

## Usage

1. Open [http://localhost:3000](http://localhost:3000) in your browser.
2. Log in as a patient, doctor, or admin using the following credentials:

   - **Patient**:
     - Birth Cert Number: `87654321`
     - Password: `patient`
   - **Doctor**:
     - Medical ID: `12345678`
     - Password: `doctor`
   - **Admin**:
     - Username: `admin`
     - Password: `admin`

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```