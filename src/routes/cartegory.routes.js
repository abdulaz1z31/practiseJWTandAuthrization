import { Router } from "express";
import { getAllCartegories, getCartegoryById } from "../controller/index.controller.js";


export const cartegoryRouter = Router()


cartegoryRouter.get("/cartegory", getAllCartegories)
cartegoryRouter.get("/cartegory/:id", getCartegoryById)