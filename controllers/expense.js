const expenseData = require("../models/expense");

// GET request to retrieve all data from database
const getExpenses = async (req, res) => {
  try {
    const response = await expenseData.findAll();
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

// POST request to add data to the database
const addExpenses = async (req, res) => {
  const invoice = {
    purchase_date: req.body.purchase_date,
    amount: req.body.amount,
    shop: req.body.shop,
    category: req.body.category,
  };
  try {
    const response = await expenseData.addData(invoice);
    if (response) {
      invoice.id = response.insertId;
      res.status(201).send(invoice);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

// PUT request to update data in the database
const updateExpenses = async (req, res) => {
  const invoice = {
    id: req.body.id,
    purchase_date: req.body.purchase_date,
    amount: req.body.amount,
    shop: req.body.shop,
    category: req.body.category,
  };
  try {
    const response = await expenseData.updateById(invoice);
    if (response) {
      res.send(invoice);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

module.exports = {
  getExpenses,
  addExpenses,
  updateExpenses,
};
