const {
  describe,
  expect,
  test,
  afterAll,
  beforeAll,
} = require("@jest/globals");
const { object } = require("joi");
const request = require("supertest");
const app = require("../app");
const connection = require("../db/connection");

describe("GET expenses endoint", () => {
  test("should return 200 and valid json", async () => {
    const response = await request(app)
      .get("/api/expenses")
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          purchase_date: "2022-05-31T21:00:00.000Z",
          amount: 14.2,
          shop: "K-Market",
          category: "ruokakauppa",
        }),
      ])
    );
  });

  test("should return 1 expense", async () => {
    const response = await request(app)
      .get("/api/expenses/1")
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
        purchase_date: "2022-05-31T21:00:00.000Z",
        amount: 14.2,
        shop: "K-Market",
        category: "ruokakauppa",
      })
    );
  });

  test("should return 404 and Not found", async () => {
    const response = await request(app).get("/api/expenses/111222333");

    expect(response.status).toEqual(404);
    expect(response.text).toContain("Not found");
  });
});

describe("POST expenses endpoint", () => {
  test("should create a new expense", async () => {
    const expense = {
      purchase_date: "2022-04-31T21:00:00.000Z",
      amount: 666.66,
      shop: "Test shop",
      category: "Test category",
    };

    const response = await request(app)
      .post("/api/expenses")
      .set("Accept", "application/json")
      .send(expense);

    expect(response.status).toEqual(201);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.id).toBeTruthy();
    expect(response.body.purchase_date).toEqual("2022-04-31T21:00:00.000Z");
    expect(response.body.amount).toEqual(666.66);
    expect(response.body.shop).toEqual("Test shop");
    expect(response.body.category).toEqual("Test category");
  });

  afterAll(async () => {
    const deletequery = `DELETE from expenses WHERE shop LIKE 'Test shop' AND category LIKE 'Test category';`;
    connection.query(deletequery, (err, result) => {
      if (err) {
        console.log(err);
      }
    });
  });
});

describe("DELETE expenses endpoint", () => {
  test("should delete the expense by id", async () => {
    const expense = {
      purchase_date: "2022-03-31T21:00:00.000Z",
      amount: 777.77,
      shop: "Test shop",
      category: "Test category",
    };

    const postResponse = await request(app)
      .post("/api/expenses")
      .set("Accept", "application/json")
      .send(expense);

    const postId = postResponse.body.id;

    const response = await request(app)
      .delete(`/api/expenses/${postId}`)
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("Expense data deleted");
  });

  test("should check that expense with id exists", async () => {
    const response = await request(app)
      .delete("/api/expenses/123123123")
      .set("Accept", "appication/json");

    expect(response.status).toEqual(404);
    expect(response.text).toEqual("Not found");
  });
});

describe("PUT expenses endpoint", () => {
  let postId;
  beforeAll(async () => {
    const expense = {
      purchase_date: "2022-03-31T21:00:00.000Z",
      amount: 777.77,
      shop: "Test shop",
      category: "Test category",
    };
    const postResponse = await request(app)
      .post("/api/expenses")
      .set("Accept", "application/json")
      .send(expense);

    postId = postResponse.body.id;
  });

  test("should update the city with the id", async () => {
    const newExpense = {
      id: postId,
      purchase_date: "2022-03-31T21:00:00.000Z",
      amount: 777.77,
      shop: "New shop",
      category: "New category",
    };
    const response = await request(app)
      .put("/api/expenses")
      .set("Accept", "application/json")
      .send(newExpense);
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(postId);
    expect(response.body.purchase_date).toEqual("2022-03-31T21:00:00.000Z");
    expect(response.body.amount).toEqual(777.77);
    expect(response.body.shop).toEqual("New shop");
    expect(response.body.category).toEqual("New category");
  });

  test("should check that expense with id exists", async () => {
    const checkExpense = {
      id: 7487345485,
      purchase_date: "2022-03-31T21:00:00.000Z",
      amount: 777.77,
      shop: "New shop",
      category: "New category",
    };
    const response = await request(app)
      .put("/api/expenses")
      .set("Accept", "application/json")
      .send(checkExpense);
    expect(response.status).toEqual(404);
    expect(response.text).toEqual("Not found");
  });

  afterAll(async () => {
    await request(app)
      .delete(`/api/expenses/${postId}`)
      .set("Accept", "application/json");
    connection.end();
  });
});
