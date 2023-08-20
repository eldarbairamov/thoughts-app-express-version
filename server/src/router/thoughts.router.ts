import { Router } from "express";
import { thoughtsController } from "../controller";
import { authMiddleware } from "../middleware";

export const thoughtsRouter = Router();

thoughtsRouter.get( "/", authMiddleware.accessControl, thoughtsController.getAll );
thoughtsRouter.post( "/", authMiddleware.accessControl, thoughtsController.create );
thoughtsRouter.delete( "/:thoughtId", authMiddleware.accessControl, thoughtsController.delete );