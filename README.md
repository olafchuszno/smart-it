# User Table Application: React + Redux Toolkit + TypeScript + SCSS

This project is a React-based web application built with ReactJS, Redux Toolkit, TypeScript, and SASS/SCSS for styling. The application is designed to retrieve and display user data in a dynamic and responsive table format. The styling is inspired by the Smart IT website to ensure a clean and modern user interface.

The application is designed to work both on desktops and mobile, featuring a menu button on mobile devices.

I encourage you to try it out using developer tools in the browser / or simply by visiting the demo on a mobile device.

## Live Demo
A live version of the application is available at: [Demo Link](https://olafchuszno.github.io/smart-it/)

### Key Features
* Filtering: Active filtering of users based on the table columns.
* Sorting: The app allows intuitive sorting the records using arrows on each column's heading

### Technologies Used
* ReactJS: For building the user interface components.
* Redux Toolkit: For managing the global state of the application.
* TypeScript: For adding static type-checking across the app, enhancing code reliability.
* SASS/SCSS: For modular and maintainable styling.

### External Libraries
* ReactJS: Core framework used to build the application.
* Redux Toolkit: Simplifies state management and provides a more efficient way to manage global state.
* Material-UI: For styled components and UI elements.
* react-loader-spinner: For displaying a loading spinner when fetching data.

### Overview
The application fetches user data from JSONPlaceholder using the GET /users endpoint and displays it in a table with columns for:
* Name
* Username
* Email
* Phone

### App Features
* User Data Retrieval
The application retrieves user data from the JSONPlaceholder API and presents it in a structured table format.

* Dynamic Filtering
The table provides search input fields for each column, allowing users to filter data in real-time based on their search queries (name, username, email, phone). It also allows to handle multiple filtering parameters at once, combining the filters -> narrowing the results even more.

* Sorting
The table includes sorting buttons for each column, which enable both ascending and descending sorting. The active sorting direction is indicated by a black arrow.

* State Management with Redux
Redux Toolkit is used to manage the global state, including user data and filter states, allowing for efficient state updates and handling of user interactions.

* TypeScript Integration
TypeScript is used comprehensively across the application, ensuring type safety and reducing the risk of runtime errors.

* Responsive and User-Friendly Design
The application’s design follows best practices for user experience, inspired by the styling of the Smart IT website, with an emphasis on clarity and ease of use.
