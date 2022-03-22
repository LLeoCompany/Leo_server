const express = require('express');
const app = express()
const port = 8080
const mysql = require('mysql2');
const passport = require('passport');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config();
const authRouter = require('./routes/auth');
const indexRouter = require('./roters');
const {sequelize} =require('./models');
const passportConfig = require('./passport');
const cookieParser = require('cookie-parser');

passportConfig();
app.set('port',process.env.PORT || 8080);
app.set('view engine','html');

nunjucks.configure('views',{
    express:app,
    watch:true,
});

sequelize.sync({force:false})
.then(()=>{
    console.log("db 연결");
}).catch((err)=>{
    console.error(err);
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json);
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    },
}));

app.use(passport.initialize);
app.use(passport.session());

app.use('/auth',authRouter);
app.use('/',indexRouter);

app.use((req,res,next)=>{
const error = new Error(`${req.method}${req.url} 라우터가 없습니다`);
error.status = 404;
next(error);    
});

app.use((err,req,res,next)=>{
    res.locals.message=err.message;
    res.locals.error=process.env.NODE_ENV !== 'production' ? err: {};
    res.status(err.status || 500);
    res.render('error');
})



const con = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:'sh6130lim',
    database:'leo_shop'
})

con.connect(function(err){
    console.log('connected');
});


