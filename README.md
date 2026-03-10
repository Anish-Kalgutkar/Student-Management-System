# Student Management System (React CRUD)

A simple Student Management application built using React.  
This project demonstrates basic CRUD (Create, Read, Update, Delete) operations along with search functionality and Excel export.

## Features

- Add new students
- View students in a table
- Edit student details
- Delete students
- Search students by name or email
- Download student data as an Excel file

## Tech Stack

- React (Frontend)
- JavaScript
- HTML / CSS
- XLSX library for Excel export

## Project Structure

src/
│
├── App.js
├── App.css
├── StudentForm.js
├── StudentTable.js
└── data.js

## Installation

1. Clone the repository

git clone https://github.com/Anish-Kalgutkar/Student-Management-System.git

2. Navigate to the project folder

cd student-management-react

3. Install dependencies

npm install

4. Run the application

npm start

The app will run at:

http://localhost:3000

Live Hosted Frontend (Deployed on Vercel):
https://student-management-system-sigma-woad.vercel.app/


## How It Works

- The user can add student details (Name, Email, Age).
- Data is displayed in a table.
- Each row has Edit and Delete actions.
- Search allows filtering students.
- Excel export downloads the student list.

## Future Improvements

- Backend integration with Node.js or NestJS
- Database support (PostgreSQL / MongoDB)
- Pagination
- Better UI styling
- Authentication

## Author

Anish Kalgutkar
