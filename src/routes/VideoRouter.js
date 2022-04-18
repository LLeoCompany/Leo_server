import express from "express";

const videoRouter  = express.Router();

const handleVideo = (req,res)=>{
    return res.send("VIDEO");
}

videoRouter.get("/watch",handleVideo);


export default videoRouter;