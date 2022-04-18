import express from "express";
import { join } from "../controllers/UserController";
import { trending } from "../controllers/VideoController";

const globalRouter = express.Router();



globalRouter.get("/",trending);
globalRouter.get("/join",join);

export default globalRouter;