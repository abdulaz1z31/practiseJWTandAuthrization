import { Router } from "express";
import {
  createAdmin,
  createCartegory,
  createUser,
  getAllAdmins,
  getAllCartegorys,
  getAllUsers,
  updateAdminsById,
  updateUsersById,
} from "../controller/index.controller.js";
import { validationMiddleware } from "../middleware/index.middleware.js";
import { adminSchema, cartegorySchema, userSchema } from "../schema/index.schema.js";

export const superAdminRouter = Router();

superAdminRouter.post("/user", validationMiddleware(userSchema), createUser);
superAdminRouter.get("/user", getAllUsers);
superAdminRouter.get("/user/:id", validationMiddleware(userSchema), updateUsersById);

superAdminRouter.post("/cartegory", validationMiddleware(cartegorySchema), createCartegory);
superAdminRouter.get("/cartegory", getAllCartegorys);
superAdminRouter.get("/cartegory/:id", validationMiddleware(cartegorySchema), updateUsersById);

superAdminRouter.post("/admin", validationMiddleware(adminSchema), createAdmin);
superAdminRouter.get("/admin", getAllAdmins);
superAdminRouter.get("/admin/:id", validationMiddleware(adminSchema), updateAdminsById);
