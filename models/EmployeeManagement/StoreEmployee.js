import mongoose from "mongoose";
import { BaseStore } from "../StoreManagement/Store/BaseStore.js";

const StoreEmployee = new mongoose.Schema({
  employeeImage: [],
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
});

const StoreEmployeeModel = BaseStore.discriminator(
  "storeemployee",
  StoreEmployee
);
export default StoreEmployeeModel;
