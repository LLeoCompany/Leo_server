const express = require("express");

const app = express();

const port = process.env.PORT || 8080;


app.use("/api/data",function(req,res){
    res.jsonp({greeting:'hello world'})
});

app.get('/',(req,res) => res.send('hello world'));

app.listen(port,()=>console.log(`port${port}`))