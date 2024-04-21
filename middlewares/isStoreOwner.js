import jwt from "jsonwebtoken";
import { BaseUser } from "../models/User/BaseUser.js";
import { BaseStore } from "../models/StoreManagement/Store/BaseStore.js";
const isStore = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res
        .status(400)
        .json({ success: false, error: "Authorization Required" });
    }
    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const storeowner = await BaseStore.findOne({
      _id: decode.userId,
    });
    const storeadmin = await BaseUser.findOne({
      _id: decode.userId,
    });
    if (!storeowner && !storeadmin) {
      return res
        .status(400)
        .json({ success: false, error: "Please Authenticate" });
    } else {
      if (storeowner) {
        if (storeowner.__type == "storeowner") {
          req.token = token;
          req.profile = storeowner;
          return next();
        }
      }
      if (storeadmin) {
        if (storeadmin.__type == "admin") {
          req.token = token;
          req.profile = storeadmin;
          return next();
        }
      }

      return res
        .status(400)
        .json({ success: false, error: "You Are Not Admin and StoreOwner" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};
export default isStore;
