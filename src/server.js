import express from "express";
import logger from "morgan";
import { useRoutes } from "react-router";
import globalRouter from "./routes/GlobalRouter";
import uesrRouter from "./routes/UserRouter";
import videoRouter from "./routes/VideoRouter";

const app = express();

const PORT = 4000;

const loggerMiddleWare = logger("dev");

//pug 사용
app.set("view engine","pug")
app.set("views",process.cwd() + "/src/views")


app.use(loggerMiddleWare); 


app.use("/",globalRouter);
app.use("/videos",videoRouter);
app.use("/users",uesrRouter)



const handleListening =()=>{
 console.log(`server open ${PORT} `)   
}

app.listen(4000,handleListening);

