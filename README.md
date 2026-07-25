# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.



## Web3Forms

Setup Instructions
Step 1: Create .env File
Create a file named .env in your project root (same level as package.json):

Step 2: Get Your Web3Forms Access Key
Go to Web3Forms
Sign up for a free account
Create a new form and copy your Access Key
Paste it in your .env file
Step 3: Update .gitignore
Make sure .env is in your .gitignore to keep your API key private:

Step 4: Test Locally
Visit your contact page and test the form submission.

