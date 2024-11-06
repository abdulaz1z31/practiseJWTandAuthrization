import { mongoose, connect } from "mongoose";
import { db_url } from "./config.js";

export const database = async () => {
    try {
        await connect(db_url);
        mongoose.connection.on("connected", () => console.log("connected"));
        mongoose.connection.on("error", (err) => {
            console.error("Connection error:", err);
        });
    } catch (error) {
        console.error("Failed to connect:", error);
    }
};
