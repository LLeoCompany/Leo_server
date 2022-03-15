const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./app/mysql/route/route.js"));

const db = "/app/mysql/model/index.js";
db.sequelizeConfig.sync();

app.get("/", (req, res) => {
  res.json({ message: `SERVER IS RUNING ON PORT${PORT}` });
});

app.listen(PORT, () => {
  console.log(`server runing${PORT}`);
});
