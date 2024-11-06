import express from "express";
import { port } from "./src/config/config.js";

import {
  authRouter,
  cartegoryRouter,
  authorRouter,
  superAdminRouter
} from "./src/routes/index.routes.js";
import { database } from "./src/config/db.js";


const app = express();
app.use(express.json());

app.use("/", authRouter);
app.use("/admin", superAdminRouter)
app.use("/author", authorRouter);
app.use("/cartegory", cartegoryRouter);



app.listen(port, async () => {
    await database()
    console.log(`server is running on ${port} port`);
});