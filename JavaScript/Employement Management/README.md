# Employee Database Manager

## Overview
The Employee Database Manager is a web-based application designed to manage a list of employees. It allows users to add new employees, view employee details, and delete employees from the list. The application is built using HTML, CSS, and JavaScript.

## Features
- **Add Employee**: A form to input employee details and add them to the database.
- **View Employee List**: Displays a list of all employees with basic information.
- **View Employee Details**: Shows detailed information of the selected employee.
- **Delete Employee**: Allows the removal of an employee from the list.

## Getting Started

### Prerequisites
- A web browser (e.g., Chrome, Firefox, Edge)

### Installation
1. Clone the repository or download the project files.
2. Open the `index.html` file in your preferred web browser.

### Project Structure
- `index.html`: The main HTML file containing the structure of the application.
- `style.css`: The CSS file for styling the application.
- `basic.js`: The JavaScript file containing the logic for the application.

## Usage

### Adding an Employee
1. Click the "Add Employee" button in the header section.
2. Fill out the form with the new employee's details.
3. Click the "Submit" button to add the employee to the list.

### Viewing Employee Details
- Click on an employee's name in the employee list to view their detailed information.

### Deleting an Employee
- Click the ❌ icon next to an employee's name to remove them from the list.

## Code Explanation

### HTML Structure (`index.html`)
- The HTML file defines the structure of the application, including the header, employee list, employee details, and the form for adding new employees.

### CSS Styling (`style.css`)
- The CSS file styles the application, making it visually appealing and user-friendly.

### JavaScript Functionality (`basic.js`)
- The JavaScript file contains the logic for managing the employees, including adding, viewing, and deleting employees.

#### Key Functions and Variables

- `data`: An array of employee objects, each containing details such as `id`, `firstName`, `lastName`, `email`, etc.
- `employees`: A variable holding the current list of employees.
- `selectedEmployeeId`: Stores the ID of the currently selected employee.
- `selectedEmployee`: Stores the details of the currently selected employee.

#### Event Listeners

- `createEmployee.addEventListener("click", ...)`: Displays the form for adding a new employee.
- `addEmployeeModal.addEventListener("click", ...)`: Hides the add employee form when clicking outside the form.
- `addEmployeeForm.addEventListener("submit", ...)`: Handles the submission of the add employee form, adds the new employee to the list, and re-renders the employee list.
- `employeeList.addEventListener("click", ...)`: Handles the selection and deletion of employees from the list.

#### Rendering Functions

- `renderEmployees()`: Renders the list of all employees.
- `renderSingleEmployee()`: Renders the detailed information of the selected employee.

## Conclusion
The Employee Database Manager is a simple yet effective tool for managing employee information. By following the instructions in this README, you can easily set up and use the application to manage your own employee database.
