import jwt from "jsonwebtoken";
import { BaseUser } from "../models/User/BaseUser.js";

const isAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res
        .status(401)
        .json({ success: false, error: "Authorization Required" });
    }
    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await BaseUser.findOne({
      _id: decode.userId,
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, error: "Please Authenticate" });
    } else {
      if (user.__type === "admin") {
        req.token = token;
        req.profile = user;
        return next();
      }
      return res
        .status(400)
        .json({ success: false, error: "You Are Not Admin" });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: "Server error" });
  }
};
export default isAdmin;
