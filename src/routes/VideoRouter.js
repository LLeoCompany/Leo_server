import express from "express";
import { edit, see,remove, upload } from "../controllers/VideoController";

const videoRouter  = express.Router();



videoRouter.get("/:id(\\d)",see);
videoRouter.get("/:id(\\d)/edit",edit);
videoRouter.get("/:id(\\d)/delete",remove);
videoRouter.get("/upload",upload)


export default videoRouter;