## Overview 
   The **Healthcare Services CRUD (Create, Read, Update, Delete) Application** is a simple React-based web application designed to manage a list of healthcare services. Users can view existing services, add new ones, edit existing services, and delete services as needed. The application utilizes React for building the user interface, React Router for navigation, and Bootstrap for styling.

## Features
   - **View Services:** Displays the list of all healthcare services.
   - **Add Service:**  Click the "Create New Service" button in the navbar to navigate to the Add Service form.
   - **Edit Service:** Click the "Edit" button next to a service to modify its details.
   - **Delete Service:** Click the "Delete" button next to a service to remove it from the list.
   - **Persistent Storage:** Services are stored in the browser's `localStorage` to ensure data persists across page reloads.


## Technologies Used
   - **React + Vite**
    This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
    Currently, two official plugins are available:
    - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
    - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

   - **React:** JavaScript library for building user interfaces.
   - **React Router DOM:** Library for handling routing in React applications.
   - **Bootstrap:** CSS framework for responsive design and styling.
   - **UUID:** Library for generating unique identifiers.


## Installation

   Follow these steps to set up and run the project locally:
   1. **Clone the Repository:**
   git clone https://github.com/dhruv9909/HealthCare.git
   2. **npm install:**
   using npm "npm install"
   3. **Running the application**
   npm run dev

## Usage
1. **Navigating the Application**
   -- Home Page: Displays the list of all healthcare services.
   -- Add Service: Click the "Create New Service" button in the navbar to navigate to the Add Service form.
   -- Edit Service: Click the "Edit" button next to a service to modify its details.
   -- Delete Service: Click the "Delete" button next to a service to remove it from the list.
2. **Adding a New Service**
   -- Click on the "Create New Service" button in the navbar.
   -- Fill in the service name, description, and price in the form.
   -- Click the "Submit" button to add the service.
   -- You will be redirected back to the Home page, where the new service will be visible.
3. **Editing an Existing Service**
   -- On the Home page, locate the service you want to edit.
   -- Click the "Edit" button next to the service.
   -- Update the service details in the form.
   -- Click the "Submit" button to save changes.
   -- You will be redirected back to the Home page, where the updated service will be displayed.
4. **Deleting a Service**
   -- On the Home page, locate the service you want to delete.
   -- Click the "Delete" button next to the service.
   -- The service will be removed from the list.
## Additional Information
   --Persistent Storage: All changes made to the services list are saved in the browser's localStorage. This ensures that your data persists even after refreshing the page or closing the browser.
   -- Unique IDs: Each service is assigned a unique identifier using the uuid library to ensure there are no conflicts when editing or deleting services.


###

1. **Repository Link:**  `https://github.com/dhruv9909/HealthCare.git`

2. **Contact Information:**  `dhruvsachdeva951@gmail.com`