import { Router } from "express";
import { createAuthor, getAllAuthors, getAuthorById } from "../controller/index.controller.js";
import { validationMiddleware } from "../middleware/index.middleware.js";
import { authorSchema } from "../schema/author.schema.js";
import { checkTokens } from "../middleware/check.tokens.js";


export const authorRouter = Router()

authorRouter.post("/authors", validationMiddleware(authorSchema), createAuthor)
authorRouter.get("/authors",checkTokens, getAllAuthors)
authorRouter.get("/authors/:id",checkTokens, getAuthorById)