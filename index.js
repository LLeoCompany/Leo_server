const express = require("express");

const app = express();

const port = process.env.PORT || 8080;

const cors = require('cors');

app.use("/api/data",function(req,res){
    res.jsonp({greeting:'hello world'})
});
app.use(cors())
app.get('/',(req,res) => res.send('hello world'));

app.listen(port,()=>console.log(`port${port}`))