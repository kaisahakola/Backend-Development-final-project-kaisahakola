const express = require("express");

const {
  getExpenses,
  getExpenseById,
  addExpenses,
  updateExpenses,
  deleteExpenses,
} = require("../controllers/expense");

const router = express.Router();

router.get("/", getExpenses);
router.get("/:id", getExpenseById);
router.post("/", addExpenses);
router.put("/", updateExpenses);
router.delete("/:id", deleteExpenses);

module.exports = router;
