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


