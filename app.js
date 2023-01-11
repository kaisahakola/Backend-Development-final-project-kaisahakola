const express = require("express");
const cors = require("cors");
const expenseRouter = require("./routes/expense");

const app = express();

app.use(express.json());
app.use("/api/expenses", expenseRouter);
app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:5000",
      "http://final-project-kaisahakola.onrender.com",
    ],
  })
);

module.exports = app;
