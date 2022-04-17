import express from "express";


const app = express();

const PORT = 4000;

const logger = (req,res,next) =>{
    console.log(`${req.method} ${req.url}`);
    next();
}

const privateMiddleWare =(req,res,next)=>{
    if(req.url === "/private"){
        res.send(`<h1>not router </h1>`)
    }
    console.log("pass pss")
        next();
}


const Home = (req,res,next) =>{
    // return res.end();
    return res.send("<h1>love</h1>")
}

const product =(req,res)=>{
    return res.send("welcome to product filed")
}

const handleLogin = (req,res) => {
    return res.send("login auth")
}

app.use(privateMiddleWare);
app.use(logger);

app.get("/",Home)
app.get("/product",product )
app.get("/login",handleLogin)


const handleListening =()=>{
 console.log(`server open ${PORT} `)   
}

app.listen(4000,handleListening);

