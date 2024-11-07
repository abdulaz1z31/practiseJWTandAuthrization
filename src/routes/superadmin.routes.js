import { Router } from "express";
import {
  createAdmin,
  createCartegory,
  createUser,
  getAllAdmins,
  getAllCartegorys,
  getAllUsers,
  loginSuperAdmin,
  updateAdminsById,
  updateUsersById,
} from "../controller/index.controller.js";
import { validationMiddleware } from "../middleware/index.middleware.js";
import { adminSchema, cartegorySchema, userSchema } from "../schema/index.schema.js";
import { checkTokens } from "../middleware/check.tokens.js";

export const superAdminRouter = Router();
superAdminRouter.post("/admin/login", loginSuperAdmin)
superAdminRouter.post("/user", validationMiddleware(userSchema),checkTokens, createUser);
superAdminRouter.get("/user", checkTokens, getAllUsers);
superAdminRouter.get("/user/:id", validationMiddleware(userSchema), checkTokens, updateUsersById);

superAdminRouter.post("/cartegory", validationMiddleware(cartegorySchema),checkTokens, createCartegory);
superAdminRouter.get("/cartegory", checkTokens, getAllCartegorys);
superAdminRouter.get("/cartegory/:id", validationMiddleware(cartegorySchema), checkTokens, updateUsersById);

superAdminRouter.post("/admin", validationMiddleware(adminSchema), checkTokens,  createAdmin);
superAdminRouter.get("/admin", checkTokens,  getAllAdmins);
superAdminRouter.get("/admin/:id", validationMiddleware(adminSchema), checkTokens, updateAdminsById);
