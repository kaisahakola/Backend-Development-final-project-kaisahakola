const express = require("express");

const {
  getExpenses,
  getShop,
  getCategory,
  getAmount,
  getExpenseById,
  //getExpenseByMonth,
  addExpenses,
  updateExpenses,
  deleteExpenses,
} = require("../controllers/expense");

const router = express.Router();

router.get("/", getExpenses);
router.get("/shop", getShop);
router.get("/category", getCategory);
router.get("/amount", getAmount);
router.get("/:id", getExpenseById);
//router.get("/:month", getExpenseByMonth);
router.post("/", addExpenses);
router.put("/", updateExpenses);
router.delete("/:id", deleteExpenses);

module.exports = router;
