# Technical Test Node.js + Typescript

This project is a Rest API developed in NestJS (using Node and Express underneath) and Typescript. The API is made in a hexagonal architecture, so, in first instance, we have the opportunity to consume it via HTTP using REST API, but other drivers such as gRPC, Websockets, or GraphQL could be implemented.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Run the Project](#run-the-project)
- [Firebase Emulators](#firebase-emulators)
- [Endpoints Available](#endpoints-available)

## Requirements

- Node.js (version 18 or higher)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/juancalderonx/nodejs-typescript-tech-test.git
   cd your-repository
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Configuration

1. Copy the `env.template` file and rename it to `.env`:

   ```sh
   cp env.template .env
   ```

2. Edit the `.env` file to include the required environment variables. Be sure to add database credentials and any other required settings.

## Running the Project

To run the project in development mode:

```sh
npm run start:dev
```

To run the project in production mode:

```sh
npm run start:prod
```

## To run the tests

```sh
npm run test
```

## To run test and generate a coverage report

```sh
npm run test:cov
```

> **Note**: If you want to use postman, you can import the `Tech-Test-NodeJS-Typescript.postman_collection.json` file that is in the root of the project so that in Postman you can test the endpoints.


## Project Explanation

This project implements a hexagonal architecture with NestJS. The project uses a Neon postgres database, but you can use any database you require.
Hexagonal architecture, also known as port and adapter architecture, aims to maintain a clear separation between the application domain and external technology concerns, such as databases and frameworks.

### Project Structure

- **App**: It contains the AppModule of the application, which is in charge of configuring the modules and drivers of the application.

- **Contexts**: It contains the different contexts of the application (for example, Users or Customers), which represent the different areas of the application. Each context contains the following folders:

- **Domain**: Contains the entities, repositories and exceptions to the domain.
- **Application**: Contains the use cases and services of the application.
- **Infrastructure**: It contains the implementation of Firebase repositories, drivers and configuration.

### Main Features

- Implementation of a hexagonal architecture.
- Implementation of design patterns, clean code and good programming practices.

I hope this README has been helpful for you to configure and understand the project. If you have any questions or problems, feel free to open an issue in the repository.