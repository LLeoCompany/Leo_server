const express = require("express");
const con = require("./config/dbconfig");
const app = express();
const port = 8080;

con.connect(function (err) {
  console.log("connected");
});
