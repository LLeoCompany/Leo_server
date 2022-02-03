const express = require('express');
const morgan = require('morgan'); 
const cookieParser=require('cookie-parser');
const session = require('express-session'); //개인의 저장공간 생성

const app = express();
const path = require('path');
//전역변수(속성)
app.set('port',process.env.PORT || 3000);



app.use(morgan('dev')); //클라이언트 요청 기록
// app.use(morgan('combined'))// 배포시
app.use('/',express.static(path.join(__dirname,'public'))); //
app.use(session());
app.use(cookieParser()); 


app.use((req,res,next)=>{
    console.log("공통 실행") 
    req.cookies   
    next(); //미들웨어는 next 를 해야만 다음 챕터로 넘어간다
});

app.get('/',(req,res)=>{
    // res.json({hello:'lim'});
//  res.sendFile(path.join(__dirname,'./index.html'));
// res.render()
    req.session // 사용자에 대한 세션

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

//에러 커스텀 
app.use((req,res,next)=>{
   res.status(404).send('404에러') //에러 표시 를 커스텀 화 시킬수 잇다
})

//error 미들웨어는 생략하면 안됨 4개 다 필수
app.use((err,req,res,next) => {
    console.log("error....");
    res.send("error 발생")
})


app.listen(app.get('port'),()=>{
    console.log('express server start')
});