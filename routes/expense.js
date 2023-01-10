const express = require("express");

const {
  getExpenses,
  getShop,
  getCategory,
  getAmount,
  getDate,
  getMonth,
  getExpenseById,
  addExpenses,
  updateExpenses,
  deleteExpenses,
} = require("../controllers/expense");

const router = express.Router();

router.get("/", getExpenses);
router.get("/shop", getShop);
router.get("/category", getCategory);
router.get("/amount", getAmount);
router.get("/purchase_date", getDate);
router.get("/month/:purchase_date", getMonth);
router.get("/id/:id", getExpenseById);
router.post("/", addExpenses);
router.put("/", updateExpenses);
router.delete("/:id", deleteExpenses);

module.exports = router;
