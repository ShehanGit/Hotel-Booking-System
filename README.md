# Hotel Booking System

This project is a Hotel Booking System that consists of a frontend built with React and a backend built with Spring Boot.

## Getting Started

### Prerequisites

- Node.js
- npm
- Java
- Maven

### Setting Up the Backend

1. Navigate to the backend directory:

    
    cd backend/bookingService/bookingService
    

2. Build the project using Maven:

   
    ./mvnw clean install
  

3. Run the Spring Boot application:

    
    ./mvnw spring-boot:run
    

### Setting Up the Frontend

1. Navigate to the frontend directory:

    
    cd frontend/hotel-booking-system
    

2. Install the dependencies:

  
    npm install
    

3. Start the development server:

    
    npm start
    

### Building the Frontend

To create a production build of the frontend, run:

npm run build


Running Tests

To run tests for the frontend, use:

npm test
Hotel Booking System
This project is a Hotel Booking System with a frontend built using React and a backend built using Spring Boot.

Table of Contents
Getting Started
Prerequisites
Setting Up the Backend
Setting Up the Frontend
Building the Frontend
Running Tests
API Endpoints
Technologies Used
Contributing
License
Getting Started
These instructions will guide you through setting up the project on your local machine for development and testing purposes.

Prerequisites
Before you begin, make sure you have the following software installed:

Node.js
npm
Java
Maven
Setting Up the Backend
Navigate to the backend directory:

sh
Copy code
cd backend/bookingService/bookingService
Build the project using Maven:

sh
Copy code
./mvnw clean install
Run the Spring Boot application:

sh
Copy code
./mvnw spring-boot:run
The backend will be available at http://localhost:8080.

Setting Up the Frontend
Navigate to the frontend directory:

sh
Copy code
cd frontend/hotel-booking-system
Install the dependencies:

sh
Copy code
npm install
Start the development server:

sh
Copy code
npm start
The frontend will be available at http://localhost:3000.

Building the Frontend
To create a production build of the frontend, run:

sh
Copy code
npm run build
This will create an optimized production build in the build directory.

Running Tests
To run tests for the frontend, use:

sh
Copy code
npm test
This will execute the test suite and provide feedback on the application's functionality.

API Endpoints
The backend provides the following API endpoints:

GET /hotels: Retrieve all hotels
POST /hotels: Create a new hotel
GET /hotels/{id}: Retrieve a hotel by ID
PUT /hotels/{id}: Update a hotel by ID
DELETE /hotels/{id}: Delete a hotel by ID
GET /hotels/download/{fileName}: Download a file
Each endpoint accepts and returns data in JSON format.

Technologies Used
Frontend: React, JavaScript, HTML, CSS
Backend: Spring Boot, Java
Database: MySQL (or any preferred database)
Build Tools: Maven, npm
Version Control: Git
Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. Contributions are welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.
API Endpoints
The backend provides the following API endpoints:

GET /hotels - Retrieve all hotels
POST /hotels - Create a new hotel
GET /hotels/{id} - Retrieve a hotel by ID
PUT /hotels/{id} - Update a hotel by ID
DELETE /hotels/{id} - Delete a hotel by ID
GET /hotels/download/{fileName} - Download a file