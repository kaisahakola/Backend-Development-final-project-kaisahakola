# 4A00EZ62 Backend-kehitys

## Backend Development - Final Project

## Topic

This application can be used to keep track of expenses. With this app, you can display, add, update and delete expense data.

This project was made by Kaisa Hakola, January 2023. This is my final project for the Backend Development course in TAMK.

# The project:

## SQL statements for creating default data

First create table to a database of your choice.

    CREATE TABLE expenses (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    purchase_date DATE,
    amount DECIMAL(5,2),
    shop VARCHAR(30),
    category VARCHAR(30)
    );

Then insert some data to that table.

    INSERT INTO expenses (purchase_date, amount, shop, category)
    VALUES ('2022-06-01', 14.20, "K-Market", "ruokakauppa");

    INSERT INTO expenses (purchase_date, amount, shop, category)
    VALUES ('2022-06-07', 32.45, "Lidl", "ruokakauppa");

    INSERT INTO expenses (purchase_date, amount, shop, category)
    VALUES ('2022-07-07', 5.95, "Intersport", "urheilukauppa");

## Backend server address

locally: http://localhost:5000/api/expenses (for your own data in your database)
on Render: http://final-project-kaisahakola.onrender.com/api/expenses (for data in my database)

## Installations

Before using the application, do the following installations:

Nodemon: `$ npm install -g nodemon`

Mysql, express and dotenv: `$ npm install mysql express dotenv --save`

SuperTest: `$ npm install --save-dev jest supertest @jest/globals`

CORS: `$ npm install cors`

I suggest using VS Code and making sure you have REST Client tool installed so that you can use the `localhost.rest` and `server.rest` files for sending the requests.

## Instructions

Here are some instructions for using the application. The application doesn't have any frontend yet, so to use the app you have to use .rest files and browser addresses.

First create a `.env` file to the root of your project. The `.env` file connects your database to the application.

    HOST: "<insert your host name>"
    DBUSERNAME: "<insert your username>"
    PASSWORD: "<insert your password>"
    DATABASE: "<insert the database you're using>"
    PORT: 5000

Now on how to use the application. Start the application by typing `npm run dev` You can go to http://localhost:5000/api/expenses or http://final-project-kaisahakola.onrender.com/api/expenses on your browser. The first address will display the dabatase on the screen that you created and connected with the `.env` file to the application. The second address displays the database that I have created while making this application. In the root of the application is located two `.rest` files. From the `localhost.rest` file you can use and modify your own database and from the `server.rest` file you can modify my database connecting to the `onrender.com` address.

If you want to search data by some specific table content value, use the following address format:

    /api/expenses/<table_content>?<table_content>=<use_value>

The table contents are shop, category, amount and purchase_date. In the <use_value> part you can insert the value that you want to filter the data with. For exapmle, if you want to search all occurances where the shop name is K-Market you can use the following address: `/api/expenses/shop?shop=K-Market`.

If you want tho search for data based on a specific month, use the address

    /api/expenses/month/<month_number>

You can do the same in the `.rest` files by sending a GET request with the same address format. To serach data by id do the same but use

    /api/expenses/id/<id_number>

If you want to add new data to the application, go to a `.rest` file and search the POST request. Inside the curly brackets you can fill all the table contents with values of your choosing. For example:

    {
        "purchase_date": "2022-07-16",
        "amount": 19.50,
        "shop": "Lidl",
        "category": "ruokakauppa"
    }

After that just send the POST request and the app will add the data to the database. Now you can see the data you added when you send the first request on the file again.

If you want to update some data on the database, in `.rest` file serach for the PUT request. Write inside the curly brackets `{}` the id of the element you want to update and then fill in the rest of the information needed. For example:

    {
        "id": 2,
        "purchase_date": "2022-06-07",
        "amount": 29.95,
        "shop": "Lidl",
        "category": "ruokakauppa"
    }

After that you can send the PUT request and the data will be updated on the database.

When you want to delete data from the database, search for the DELETE request in the `.rest` file. The `.rest` file has an address filled ready with an id at the end of the address

    /api/expenses/id/<id_number>

Change the address to the id that you want to delete from the database and send the DELETE request. The data should the nbe deleted from the database.

## Tests

To run the tests, you have to insert `npm run test` to your terminal. This runs trough all the tests and tells if the code passed them.

The first and second tests on the `tests/expenses.test.js` file passes only if you insert correct data to the test that exists on the database. So if the dummy information is a element that has been deleted or updated, the tests will not pass.

Other tests include:

    GET endpoint tests
    -should return 200 and valid json (works with dummy data)
    -should return 1 expense (works with dummy data)
    -should return 404 and not found

    POST endpoint tests
    -should create a new expense

    DELETE endpoint tests
    -should delete the expense by id
    -should check that expense with id exists

    PUT endpoint tests
    -should update the expense with the id

# Self evaluation

### A. Solution Design

Rating: 12

### B. Execution

Rating: 30

### C. Requirements Satisfaction

Rating: 20

### D. Coding Style

Rating: 20

### E. Documentation

Rating: 10
