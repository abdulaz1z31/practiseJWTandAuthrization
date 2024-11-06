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

export const superAdminRouter = Router();

superAdminRouter.post("/user", createUser);
superAdminRouter.get("/user", getAllUsers);
superAdminRouter.get("/user/:id", updateUsersById);

superAdminRouter.post("/cartegory", createCartegory);
superAdminRouter.get("/cartegory", getAllCartegorys);
superAdminRouter.get("/cartegory/:id", updateUsersById);

superAdminRouter.post("/admin", createAdmin);
superAdminRouter.get("/admin", getAllAdmins);
superAdminRouter.get("/admin/:id", updateAdminsById);
