import express from "express";
import { join, login } from "../controllers/UserController";
import { search, trending } from "../controllers/VideoController";

const globalRouter = express.Router();



globalRouter.get("/",trending);
globalRouter.get("/join",join);
globalRouter.get("/login",login);
globalRouter.get("/search",search)

export default globalRouter;