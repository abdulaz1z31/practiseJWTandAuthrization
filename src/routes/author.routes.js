import { Router } from "express";
import { getAllAuthors, getAuthorById } from "../controller/index.controller.js";


export const authorRouter = Router()


authorRouter.get("/authors", getAllAuthors)
authorRouter.get("/authors/:id", getAuthorById)