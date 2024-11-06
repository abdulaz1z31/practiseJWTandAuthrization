import { Router } from "express";
import { loginAuthor, registerAuthor } from "../controller/index.controller.js";
import { validationMiddleware } from "../middleware/index.middleware.js";
import { loginSchema, registerSchema } from "../schema/index.schema.js";


export const authRouter = Router()


authRouter.post("/register", validationMiddleware(registerSchema), registerAuthor)
authRouter.post("/login", validationMiddleware(loginSchema), loginAuthor)