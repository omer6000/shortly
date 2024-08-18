
# Shortly - URL Shortening Service

This project is a URL shortening service built with Vue.js. It allows users to shorten URLs and manage them conveniently. This README provides instructions on how to set up the development environment, including the required Node.js and npm versions.

## Prerequisites

Before you can run this project, ensure you have the following installed on your machine:

- **Node.js**: v20.16.0
- **npm**: v10.8.1

You can check your current versions by running:

```bash
node --version
npm --version
```

If your versions do not match, follow the steps below to install the correct versions.

## Setting Up the Development Environment

### 1. Install Node.js and npm

If you don't have Node.js or npm installed, you can install them via [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) or download directly from the [official Node.js website](https://nodejs.org/).

#### Using nvm (Recommended)

1. **Install nvm**: Follow the instructions [here](https://github.com/nvm-sh/nvm#installing-and-updating).

2. **Install Node.js v20.16.0**:
   ```bash
   nvm install 20.16.0
   ```

3. **Use Node.js v20.16.0**:
   ```bash
   nvm use 20.16.0
   ```

4. **Verify Node.js and npm versions**:
   ```bash
   node --version
   npm --version
   ```

### 2. Clone the Repository

Clone this repository to your local machine:

```bash
git clone git@github.com:omer6000/shortly.git
cd shortly
```

### 3. Install Project Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### 4. Run the Development Server

Start the development server:

```bash
npm run dev
```

The development server will start, and the application will be accessible at a random port, which is printed in the terminal. Look for a message similar to:

```bash
Local:    http://localhost:PORT_NUMBER
```

Replace `PORT_NUMBER` with the actual port number shown in your terminal.
