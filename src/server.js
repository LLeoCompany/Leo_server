import express from "express";


const app = express();

const PORT = 4000;

const gosipMiddleWare = (req,res,next) =>{
    console.log(`middleware test  ${req.url}`);
    next();
}


const Home = (req,res,next) =>{
    // return res.end();
    return res.send("<h1>love</h1>")
}

const handleLogin = (req,res) => {
    return res.send("login auth")
}

app.get("/",gosipMiddleWare,Home)
 
app.get("/login",handleLogin)


const handleListening =()=>{
 console.log(`server open ${PORT} `)   
}

app.listen(4000,handleListening);

