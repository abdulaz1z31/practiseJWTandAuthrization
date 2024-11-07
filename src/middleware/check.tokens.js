import { verifyTokens } from "../helpers/jwt.js";

export const checkTokens = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const { error, decode } = verifyTokens("access", token);
    req.use = decode;
    next();
  } catch (err) {
    next(err);
  }
};
