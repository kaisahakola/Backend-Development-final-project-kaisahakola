const express = require("express");

const {
  getExpenses,
  getShop,
  //getExpenseById,
  //getExpenseByMonth,
  addExpenses,
  updateExpenses,
  deleteExpenses,
} = require("../controllers/expense");

const router = express.Router();

router.get("/", getExpenses);
router.get("/", getShop);
//router.get("/:id", getExpenseById);
//router.get("/:month", getExpenseByMonth);
router.post("/", addExpenses);
router.put("/", updateExpenses);
router.delete("/:id", deleteExpenses);

module.exports = router;
