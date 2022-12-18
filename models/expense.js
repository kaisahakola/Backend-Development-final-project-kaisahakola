const connection = require("../db/connection");

const expenseData = {
  // GET request to retrieve all data from database
  findAll: () =>
    new Promise((resolve, reject) => {
      const getQuery = "SELECT * FROM expenses;";
      connection.query(getQuery, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),

  // GET request to get data by id
  findById: (id) =>
    new Promise((resolve, reject) => {
      const getIdQuery = "SELECT * FROM expenses WHERE id=?;";
      connection.query(getIdQuery, id, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),

  // POST request to add data to the database
  addData: (invoice) =>
    new Promise((resolve, reject) => {
      const postQuery = "INSERT INTO expenses SET ?;";
      connection.query(postQuery, invoice, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),

  // PUT request to update data in the database
  updateById: (invoice) =>
    new Promise((resolve, reject) => {
      const putQuery =
        "UPDATE expenses SET purchase_date = ?, amount = ?, shop = ?, category = ? WHERE id = ?";
      connection.query(
        putQuery,
        [invoice.purchase_date, invoice.amount, invoice.shop, invoice.category],
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),

  // DELETE request to let user delete data
  deleteById: (id) =>
    new Promise((resolve, reject) => {
      const deleteQuery = "DELETE FROM expenses WHERE id=?;";
      connection.query(deleteQuery, id, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
};

module.exports = expenseData;
