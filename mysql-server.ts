const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./src/app/mysql/route/route.ts"));

const dbb = require('./src/app/mysql/model/index.ts');
dbb.sequelizeConfig.sync();

app.get("/", (req, res) => {
  res.json({ message: `SERVER IS RUNING ON PORT${PORT}` });
});

app.listen(PORT, () => {
  console.log(`server runing${PORT}`);
});
