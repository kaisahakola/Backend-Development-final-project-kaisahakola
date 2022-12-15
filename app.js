const express = require("express");
const expenseRouter = require("./routes/expense");

const app = express();

app.use(express.json());
app.use("/api/expense", expenseRouter);

module.exports = app;
