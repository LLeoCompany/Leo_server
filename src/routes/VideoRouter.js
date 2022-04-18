import express from "express";
import { edit, watch } from "../controllers/VideoController";

const videoRouter  = express.Router();



videoRouter.get("/watch",watch);
videoRouter.get("/edit",edit);

export default videoRouter;