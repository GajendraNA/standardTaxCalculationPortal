Tax Calculation Portal
This is a Full Stack Application for calculating tax liability based on Indian Income Tax laws. It consists of:

A React frontend for user interaction.

A Spring Boot backend for tax calculation and data storage.

Table of Contents
Features

Tech Stack

Frontend Setup

Backend Setup

API Documentation

Deployment

Screenshots

Contributing

Features
Frontend:

User-friendly form for entering income details.

Displays tax calculation results.

Shows a list of past tax records.

Backend:

RESTful API for tax calculation.

Stores tax records in a database (optional).

Follows Indian Income Tax laws for calculations.

Tech Stack
Frontend
React.js: Frontend library for building the user interface.

Axios: For making HTTP requests to the backend.

React Router DOM: For routing between pages.

CSS: For styling the application.

Backend
Spring Boot: Backend framework for building RESTful APIs.

Spring Data JPA: For database interaction (optional).

Gradle: Build tool for managing dependencies.

Frontend Setup
Prerequisites
Node.js (v16 or higher)

npm (v8 or higher)

Steps to Run the Frontend
Clone the repository:

bash
Copy
git clone https://github.com/GajendraNA/standardTaxCalculationPortal.git
Navigate to the frontend directory:

bash
Copy
cd tax-calculation-portal/frontend
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm start
Open the app in your browser:

Copy
http://localhost:3000


Backend Setup
Prerequisites
Java (JDK 21 ) 

Gradle 8.12.1 (v3.8 or higher)


Configure PostgreSQL Database
Update application.properties:

spring.datasource.url=jdbc:postgresql://localhost:5432/stcp_db
spring.datasource.username=your_username
spring.datasource.password=your_password

Steps to Run the Backend
Navigate to the backend directory:

bash
Copy
cd tax-calculation-portal/backend
Build the project:

bash
Copy
./gradlew clean build

Run the Spring Boot application:

bash
Copy
./gradlew bootRun

The backend will start at:

Copy
http://localhost:8080
API Documentation
1. Calculate Tax
Endpoint: POST /api/calculate-tax

Request Body:

json
Copy
{
  "annualIncome": 1000000,
  "investments80C": 150000,
  "investments80D": 15000,
  "hra": 50000,
  "lta": 20000,
  "otherIncome": 100000,
  "otherDeductions": 30000
}
Response:

json
Copy
{
  "taxableIncome": 825000,
  "taxPayable": 77500,
  "taxSavingsSuggestions": "No additional tax savings suggestions."
}
2. Get Tax Records
Endpoint: GET /api/v1/tax-records

Response:

json
Copy
[
	{
		"id": 1,
		"annualIncome": 1000000.0,
		"investments80C": 150000.0,
		"investments80D": 25000.0,
		"hra": 50000.0,
		"lta": 20000.0,
		"otherIncome": 100000.0,
		"otherDeductions": 30000.0,
		"taxableIncome": 825000.0,
		"taxPayable": 77500.0,
		"taxSavingsSuggestions": "No additional tax savings suggestions."
	},
	{
		"id": 2,
		"annualIncome": 1000000.0,
		"investments80C": 150001.0,
		"investments80D": 25000.0,
		"hra": 50000.0,
		"lta": 20000.0,
		"otherIncome": 100000.0,
		"otherDeductions": 30000.0,
		"taxableIncome": 824999.0,
		"taxPayable": 77499.8,
		"taxSavingsSuggestions": "No additional tax savings suggestions."
	}
]
