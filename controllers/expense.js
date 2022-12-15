const expense = require("../models/expense");
//const Joi = require("joi");

const getExpenses = async (req, res) => {
  try {
    const response = await expense.findAll();
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

module.exports = {
  getExpenses,
};
