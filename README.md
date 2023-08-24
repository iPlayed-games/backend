# IPlayed-backend

Welcome to iplayed-backend – the backend component of our exciting developer group's projects!

Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Commiting](#commiting)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Contributing](#contributing)
- [License](#license)

## About

iplayed-backend is the backend module for our innovative developer group's projects. We focus on integrating gamification into engaging activity venues like escape rooms, axe throwing, and paintball, creating a blend of technology and entertainment.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites:

- Node.js: Make sure you have Node.js installed. You can download it from here.

### Installation

1. [Clone the repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository):

   `git clone https://github.com/iplayed/iplayed-backend.git`

2. Ask on Discord for the `.env` file credentials if necessary and add it to your local copy.

3. Keep the `.env-template` file and create a `.env` file with the credentials. To use the key from the credentials file, use ` const EXAMPLE_KEY = process.env.EXAMPLE_KEY;`

4. Navigate to the project directory:

   `cd iplayed-backend`

5. Install dependencies:

   `npm install`

## Usage

To run the development server, use the following command:

`npm run dev`

This will start the Express development server and allow you to preview your backend.

## Endpoints API using Swagger UI

To run swagger docs, run the server and open:

`http://localhost:3001/api-docs`

## Commiting

[Branch out](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) by following the structure [ISSUE-ID]-[Similar ticket title] and submit your [PR](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests). For example: `9-Login_form`

After completing your component and you are ready to commit do the following...

`npm run lint` and `npm run test`

## Scripts

- dev: Start the Express development server.
- dev:seed: Start the Express development server with seed data.
- build: Build the Express project.
- lint: Run TypeScript, Express linting, and auto-format with Prettier.
- test: Run Jest tests.
- prisma-update: Executes the changes required to make your database schema reflect the state of your Prisma schema
- prisma-generate: Generate Prisma Client

## Dependencies

- \@prisma/client\: auto-generated, type-safe and modern JavaScript/TypeScript ORM for Node.js that's tailored to your data.
- body-parser: Node.js body parsing middleware.
- dotenv: Zero-dependency module that loads environment variables from a .env file into process.env.
- express: Flexible Node.js web application framework
- mongoose: Node.js based Object Data Modeling (ODM) library.
- prisma: Node.js and TypeScript Object-Relational Mapping (ORM)
- swagger-ui-express: auto-generated swagger-ui generated API docs from express

## Dev Dependencies

- \@types/dotenv\: Types for DotNet.
- \@types/express\: Types for Express.
- \@types/jest\: TypeScript types for Jest.
- \@types/node\: Types for Node.js.
- \@typescript-eslint/eslint-plugin\: Load custim rules and rukes configurtion list from typescript-eslint.
- \@typescript-eslint/parser\: Parse to convert typescript to use ESLint.
- \@types/supertest\: Types for SuperTest
- \@types/swagger-ui-express\: Types for Swagger
- eslint: ESLint for code linting.
- eslint-config-prettier: ESLint config to disable ESLint formatting rules in favor of Prettier.
- jest: Testing framework.
- nodemon: Automatically restarting the node application when file changes
- prettier: Code formatter.
- superTest: create testing for e2e-integrations.
- yaml: converted YAML <=> JSON.
- ts-jest: Jest transformer to test projects written in TypeScript
- ts-node: TypeScript execution engine and REPL for Node.js
- typescript: TypeScript for static typing.

## Contributing

If you're interested in participating, sign up at the following URL:

- [Sign-Up Form](https://forms.gle/nAsyk91DiCZB3tAk7)

## License

This project is licensed under the MIT License.

---

Join us on this journey of innovation and growth!
