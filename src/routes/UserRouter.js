import express from "express";

const uesrRouter =express.Router();

const hanleUser = (req,res) =>{
    return res.send("User");
    }

uesrRouter.get("/edit",hanleUser);


export default uesrRouter;