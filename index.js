const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend is listening on port ${PORT}`);
});

app.get("/health", (req, res) => {
  res.send("OK");
});
