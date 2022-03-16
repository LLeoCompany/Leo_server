const express = require('express');
const app = express()
const port = 8080

const mysql = require('mysql2');

const con = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:'sh6130lim',
    database:'leo_shop'
})

con.connect(function(err){
    console.log('connected');
});


app.get('/',(req,res) => res.send('hello world'));

app.listen(port,()=>console.log(`port${port}`))