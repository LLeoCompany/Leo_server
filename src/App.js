const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8081;

//set Cors Option
app.use(cors());

app.use(bodyParser.json());

//Pare requests of content-type : application/x-www-urlenoded
app.use(bodyParser.urlencoded({ extended: true }));

//RESTful API route for DB
app.use("/", require("./api-routes/route.js"));

//DB Connection
const db = require("./model/index.js");
db.sequelizeConfig.sync();

//Default route for server status
app.get("/", (req, res) => {
  res.json({ message: `Server is runing on port${POPT}` });
});

//Set listen port for request
app.listen(PORT, () => {
  console.log(`Server is running on port${PORT}`);
});

//express -> RESTful API 환경을 구축하기 위해 사용하는 Node.js 웹 프레임워크
//body-parser -> request 구문과 req.body 를 파싱하는 Node.js 미들웨어
//cors -> CORS 설정에 사용되는 Express 미들웨어
