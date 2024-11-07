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

app.use("/auth", authRouter);
app.use("/admin", superAdminRouter)
app.use("/author", authorRouter);
app.use("/cartegory", cartegoryRouter);

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
// });

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});


app.listen(port, async () => {
    await database()
    console.log(`server is running on ${port} port`);
});