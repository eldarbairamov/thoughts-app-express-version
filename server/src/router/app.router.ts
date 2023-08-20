import { Router } from "express";
import { authRouter } from "./auth.router";
import { thoughtsRouter } from "./thoughts.router";

export const appRouter = Router()

appRouter.use('/auth', authRouter)
appRouter.use('/thoughts', thoughtsRouter)