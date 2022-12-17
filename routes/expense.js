const express = require("express");

const {
  getExpenses,
  addExpenses,
  updateExpenses,
} = require("../controllers/expense");

const router = express.Router();

router.get("/", getExpenses);
router.post("/", addExpenses);
router.put("/", updateExpenses);

module.exports = router;
