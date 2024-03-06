# Japashop

Japashop is a full-stack web application built using Node.js, React, and MongoDB. It serves as an e-commerce platform designed for Japanese products. The application includes CRUD functionalities for managing users, products, shopping carts, and admin action history. It also incorporates authentication using bcrypt for securing user passwords.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Management:** Allows administrators to manage user accounts, including creating, updating, deleting, and viewing user profiles.
- **Product Management:** Enables administrators to add, edit, and remove products from the inventory.
- **Shopping Cart:** Provides functionality for users to add products to their shopping carts and proceed to checkout.
- **Admin Action History:** Maintains a log of administrative actions for auditing purposes.
- **Authentication:** Implements authentication using bcrypt to securely store and validate user passwords.

## Technologies Used
- **Node.js:** Backend JavaScript runtime environment.
- **React:** JavaScript library for building user interfaces.
- **MongoDB:** NoSQL database for storing application data.
- **bcrypt:** Library for hashing passwords securely.
- **@testing-library/jest-dom**, **@testing-library/react**, **@testing-library/user-event**: Testing utilities for writing unit and integration tests.
- **axios:** Promise-based HTTP client for making requests to the backend.
- **bootstrap:** Frontend framework for responsive and attractive UI design.
- **cors:** Package for handling Cross-Origin Resource Sharing in Node.js.
- **dotenv:** Module for loading environment variables from a `.env` file.
- **emailjs-com:** Library for sending emails from the application.
- **express:** Web framework for Node.js for building backend APIs.
- **mongoose:** MongoDB object modeling library for Node.js.
- **multer:** Middleware for handling file uploads in Express.
- **react**, **react-dom**, **react-router-dom**, **react-scripts**: Libraries for building the frontend UI and managing routes in React.
- **sass:** Preprocessor scripting language for CSS, used for styling the frontend.

## Installation
1. Clone the repository:

    ```
    git clone https://github.com/your-username/japashop.git
    ```

2. Navigate to the project directory:

    ```
    cd japashop
    ```

3. Install dependencies for both backend and frontend:

    ```
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Define environment variables such as `MONGODB_URI`, `SECRET_KEY`, etc.

5. Start the backend server:

    ```
    cd backend
    npm start
    ```

6. Start the frontend development server:

    ```
    cd frontend
    npm start
    ```

7. Access the application at `http://localhost:3000` in your web browser.

## Usage
- **User Management:**
  - Access the user management section to create, update, or delete user accounts.
- **Product Management:**
  - Navigate to the product management page to add, edit, or remove products from the inventory.
- **Shopping Cart:**
  - Add products to the shopping cart and proceed to checkout.
- **Admin Action History:**
  - View the admin action history to monitor changes made by administrators.
- **Authentication:**
  - Log in with your credentials to access restricted sections of the application.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any bugs or have suggestions for improvements.

## License
This project is licensed under the [MIT License](LICENSE).
