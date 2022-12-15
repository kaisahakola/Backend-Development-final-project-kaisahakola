# 4A00EZ62 Backend-kehitys

## Backend Development - Final Project

## Topic

### General Project

Most of us want to know where our money goes. You now have the chance to create a solution to that question. Create an application for tracking your personal expenses.

# SQL statements for creating the table

CREATE TABLE expenses (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
purchase_date DATE,
amount(€) DECIMAL(5,2),
shop VARCHAR(30),
category VARCHAR(30)
);

INSERT INTO expenses (purchase_date, amount, shop, category)
VALUES ('2022-06-01', 14.20, "K-Market Kissanmaa", "ruokakauppa");

INSERT INTO expenses (purchase_date, amount, shop, category)
VALUES ('2022-06-07', 32.45, "Lidl Ratina", "ruokakauppa");

INSERT INTO expenses (purchase_date, amount, shop, category)
VALUES ('2022-06-07', 5.95, "Suomalainen kirjakauppa", "kirjakauppa");
