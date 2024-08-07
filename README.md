# Hotel Booking System
This repository contains the source code for a comprehensive Hotel Booking System, including both backend and frontend components. The system allows users to book hotel rooms and manage bookings, while also providing administrative capabilities for hotel management.

## Table of Contents
Project Structure
Backend
Key Files and Directories
Setup
Frontend
Key Files and Directories
Setup
Version Control
License
Contributing
Contact
Project Structure

##Backend
The backend is a Java-based service managed with Maven. It provides the core functionality for managing hotel bookings, user authentication, and other related services.

## Key Files and Directories
- pom.xml: Maven configuration file that manages dependencies and project build.
-src/: Contains the Java source code for the backend service, including controllers, services, repositories, and domain models.

## Setup
To set up and run the backend service:

## Navigate to the backend directory:
cd backend/bookingService/bookingService

## Build the project using Maven:


./mvnw clean install

## Run the backend service:


./mvnw spring-boot:run
The backend will start on http://localhost:8080 by default.


## Frontend
The frontend is a JavaScript-based application managed with Node.js and styled using Tailwind CSS. It provides a user-friendly interface for booking hotels, viewing reservations, and managing user accounts.

## Key Files and Directories
package.json: Node.js configuration file that manages dependencies and scripts.
public/: Contains static assets such as images and fonts.
src/: Contains the JavaScript source code for the frontend application, including React components, hooks, and utility functions.
tailwind.config.js: Configuration file for Tailwind CSS, allowing customization of the design system.



## Setup
To set up and run the frontend application:

## Navigate to the frontend directory:

cd frontend/hotel-booking-system
Install the dependencies:


npm install
Start the development server:


npm start
The frontend will start on http://localhost:3000 by default.

## Version Control
This project uses Git for version control. Ensure that your changes do not include unnecessary files and directories by adhering to the .gitignore files present in the repository.

## License
This project is licensed under the MIT License. Please refer to the LICENSE file for details.

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository, create a new branch, and submit a pull request. Make sure to provide a clear description of your changes and the problem you're solving.