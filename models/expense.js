const connection = require("../db/connection");

const expenseData = {
  findAll: () =>
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM expenses;", (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
};

module.exports = expenseData;
