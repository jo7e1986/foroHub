import { verifyJwt } from "../libs/jwt.js";

const verifyTokenMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization") || "";
    if (!token) {
      return res.status(401).json({ message: "Token not provied" });
    }
    const payload = await verifyJwt(token);
    req.username = payload.username;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default verifyTokenMiddleware;
