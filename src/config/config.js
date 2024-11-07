import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const db_url = process.env.MONGO_URI;
export const ref_key = process.env.REFRESH_KEY
export const acc_key = process.env.ACCESS_KEY
export const ref_time = process.env.REFRESH_TIME
export const acc_time = process.env.ACCESS_TIME