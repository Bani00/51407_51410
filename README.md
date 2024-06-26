# ONLINE CURRENCY EXCHANGE

![alt text](image.png)

## Description

This project is a web application created using Node.js, TypeScript and React. This is an online currency exchange office where the user can check the rates of individual currencies available in the database. (The rates are made up and do not reflect real values.)

## Technologies

1. Node.js[v18.12.1]: JavaScript runtime environment used for building server-side applications.
2. TypeScript[5.2.2]: Programming language that adds static typing to JavaScript.
3. React[18.3.1]: JavaScript library for building user interfaces.

## Requirements

1. Node.js
2. NPM (Node Package Manager) or Yarn

## Installation

1.  Clone the repository to your local machine.
2.  Navigate to the project's root directory.
3.  Open a terminal and run the following command to install all dependencies:<br />
    `npm install` <br />
    or <br />
    `yarn install`

## Running

To run the application locally, follow these steps:

1.  Navigate to the project's root directory.
2.  In the terminal, run the command:<br />
    `npm run build`<br />
    next<br />
    `npm run dev`

Now backend of the application should work on http://localhost:3333/api.

3.  Open second terminal and run the command:<br />
    `cd frontend`<br />
    next <br />
    `npm start`

Now after couple of seconds our web application should start on http://localhost:3000 inside web browser and is ready to work.

# Testing

Test are made using Jest, Mockito and TestContainers. There are unit tests for every layer of our backend app, one integration test and one e2e test.
To run all tests open terminal and run the command:
`npm run test`

# Endpoints

Routes:

1. `/api/currency`:
   Getting all available currencies from database as an array of strings with their names.<br />

   Example: [USD, PLN, CHF]

2. `/api/currency/:nameOfCurrency`:<br />
   Getting all exchange rates for choosen currency.<br />

   Example: `/api/currency/USD`:<br />
   `{ "exchangeRates": [{ "currency": "PLN", "exchangeRate": 3.77 }]}`

3. `/api/currency/:nameOfCurrency?compare_to=<nameOfCurrency>`:<br />
   Getting ratio between 2 given currencies.<br />

   Example: `/api/currencies/GBP?compare_to=PLN`:<br />
   `{ "exchangeRate": 3.77 }`
