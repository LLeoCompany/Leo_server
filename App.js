const express = require('express');

const app = express();
const path = require('path');
//전역변수(속성)
app.set('port',process.env.PORT || 3000);


app.use('/about',(req,res,next)=>{
    console.log("공통 실행")
    next(); //미들웨어는 next 를 해야만 다음 챕터로 넘어간다
})

app.get('/',(req,res)=>{
 res.sendFile(path.join(__dirname,'./index.html'));
});
app.post('/',(req,res)=>{
    res.send('hello world');
   });
   app.get('/about',(req,res)=>{
    res.send('hello world');
   });

app.get('/category/:name',(req,res)=>{
    res.send(`hello ${req.params.name}`);
})


app.listen(app.get('port'),()=>{
    console.log('express server start')
});