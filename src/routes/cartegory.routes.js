import { Router } from "express";
import { createCartegory, getAllCartegories, getCartegoryById } from "../controller/index.controller.js";
import { validationMiddleware } from "../middleware/index.middleware.js";
import { cartegorySchema } from "../schema/cartegory.schema.js";


export const cartegoryRouter = Router()


cartegoryRouter.post("/cartegory", validationMiddleware(cartegorySchema), createCartegory)
cartegoryRouter.get("/cartegory", getAllCartegories)
cartegoryRouter.get("/cartegory/:id", getCartegoryById)