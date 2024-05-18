# Frontend-Repository

**Project : Pagination**

---

# Pagination Project in React

Welcome to the Pagination Project in React! This project demonstrates how to implement pagination in a React application to fetch and display data from an API in a paginated manner.

## Features

- Fetches data from an API with pagination functionality.
- Displays a list of items based on the current page.
- Allows users to navigate through pages using previous and next buttons.
- Responsive design for a seamless user experience across devices.

## Technologies Used

- React.js
- useState and useEffect hooks for managing state and side effects.
- Fetch API for making asynchronous requests to the API.
- CSS for styling the pagination components and product list.

## Usage

1. Open the project in your web browser.
2. Navigate to the pagination section to view the paginated list of items.
3. Click on the page numbers or previous/next buttons to navigate through pages.


**Project 2 : VS_Code-Clone**

# VS Code Clone

This project is a simplified clone of Visual Studio Code (VS Code) built using React. It aims to replicate some of the core functionalities and user interface elements of VS Code, providing a familiar development environment for users.

## Features

- **Folder Structure:** Organize your files into folders with a collapsible tree view, similar to VS Code.
- **Create Files and Folders:** Easily add new files or folders to your project directly from the UI.
- **Interactive UI:** Intuitive buttons for creating folders or files, making the app user-friendly.
- **React Hooks:** Utilizes useState and custom hooks for efficient state management and tree traversal.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/vs-code-clone.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd vs-code-clone
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Development Server:**

   ```bash
   npm start
   ```

5. **Open in Browser:**

   Once the development server is running, open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

- **Folder Navigation:** Click on folders to expand/collapse their contents.
- **Create New Items:** Use the "Folder +" or "File +" buttons to add new folders or files respectively.
- **Editing Files:** Double click on file names to edit them inline.
- **Keyboard Shortcuts:** Press Enter to confirm changes or Esc to cancel.


**Project 3: Interactive Gird Box Display**
# Dynamic Box

Welcome to the Dynamic Box project! This project is a React application that demonstrates the concept of dynamic rendering and interactive user experiences through a grid of dynamically generated boxes.

## Features

- **Dynamic Box Generation**: The application dynamically generates a grid of boxes based on user input, allowing for flexible customization.
- **Interactive Boxes**: Users can interact with each box by clicking on them, triggering dynamic changes in their appearance or behavior.
- **State Management**: The project showcases state management in React, highlighting the use of hooks such as `useState` for handling dynamic data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your computer. If you don't have them installed, you can download and install them from [Node.js's official website](https://nodejs.org/).

This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make edits.

## How to Use

1. **Input Grid Size**: Enter the desired number of rows and columns for the grid in the input fields provided.
2. **Generate Grid**: Click on the "Generate Grid" button to dynamically create the grid based on your input.
3. **Interact with Boxes**: Click on any box within the grid to experience interactive behavior, such as changing colors, animations, or other dynamic effects.

## Built With

- [React](https://reactjs.org/) - The JavaScript library for building user interfaces
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Used for custom styling and animations


** Javascript Project 1 **

# Eployee Management

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
