const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

//내장된 Express JSON-JSON 해석
app.use(express.json());

//urlencoded 를 사용하여 URL 인코딩 본문 해석
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port, () => console.log(`port${port}`));
