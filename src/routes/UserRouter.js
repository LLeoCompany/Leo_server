import express from "express";
import { edit, logout, remove, see } from "../controllers/UserController";

const uesrRouter =express.Router();


uesrRouter.get("/:id",see);
uesrRouter.get("/logout",logout);
uesrRouter.get("/edit",edit);
uesrRouter.get("/remove",remove)

export default uesrRouter;