const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port, () => console.log(`port${port}`));
