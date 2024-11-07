import jwt from "jsonwebtoken";
import { ref_key, acc_key, ref_time, acc_time } from "../config/config.js";


export const createTokens = (payload) => {
  const accessToken = jwt.sign(payload, acc_key, { expiresIn: acc_time });
  const refreshToken = jwt.sign(payload, ref_key, { expiresIn: ref_time });

  return { accessToken, refreshToken };
};


export const verifyTokens = (type, token) => {
    const data = jwt.verify(
        token,
      type === "access" ? acc_key : ref_key  
    );
    return data
  };