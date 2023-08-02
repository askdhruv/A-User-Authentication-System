# task4-luganodes
User management dashboard with multi-authentication with Email/Password and Web3 authentication


To run the code, you need to run the following commands.

```
npm i
```
Then start the backend server by using the following command

```
node index.js
```

and go to http://localhost:3000, connect the Metamask and test the application.

# User Management Dashboard with Multi-Authentication
This web application provides a flexible authentication system, allowing users to sign up and log in using either email/password or Web3 authentication with their Ethereum wallets. JWT (JSON Web Tokens) will be used for secure session management in both cases.

### Features
- User registration and login
- Web3 authentication integration (using MetaMask)
- JWT-based session management
- Secure storage of credentials (using MD5 hashing)
- Authentication portability (allow users to switch between email/password and Web3 authentication methods seamlessly)
- User dashboard (displays relevant information and allows users to manage their account settings)
- Google OAuth option

### Technology Stack
- HTML, CSS for front-end
- Node.js, Express.js for back-end
- MongoDB for database

### How to Use
- Go to the home page.
- Click on the "Login" button.
- If you are a new user, click on the "Register" button.
- If you are logging in with email/password, enter your email address and password.
- If you are logging in with Web3, connect your MetaMask wallet.
- Once you are logged in, you will be taken to the user dashboard.

### To Do
- Add more features to the user dashboard.
- Improve the security of the application.

