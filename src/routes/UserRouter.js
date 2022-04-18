import express from "express";
import { edit, remove } from "../controllers/UserController";

const uesrRouter =express.Router();



uesrRouter.get("/edit",edit);
uesrRouter.get("/delete",remove)

export default uesrRouter;