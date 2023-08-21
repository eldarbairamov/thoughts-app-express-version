import { Router } from "express";
import { authController } from "../controller";
import { authMiddleware } from "../middleware";

export const authRouter = Router()

authRouter.post('/login', authController.login)
authRouter.post('/registration', authController.registration)
authRouter.post('/refresh', authController.refresh)
authRouter.delete('/logout', authMiddleware.accessControl, authController.logout)