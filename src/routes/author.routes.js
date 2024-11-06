import { Router } from "express";
import { createAuthor, getAllAuthors, getAuthorById } from "../controller/index.controller.js";
import { validationMiddleware } from "../middleware/index.middleware.js";
import { authorSchema } from "../schema/author.schema.js";


export const authorRouter = Router()

authorRouter.post("/authors", validationMiddleware(authorSchema), createAuthor)
authorRouter.get("/authors", getAllAuthors)
authorRouter.get("/authors/:id", getAuthorById)