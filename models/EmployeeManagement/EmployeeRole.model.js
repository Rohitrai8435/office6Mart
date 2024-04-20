import mongoose from "mongoose";

const RoleSchema = mongoose.Schema({
  name: {
    type: String,
  },
  permisions: [],
});

const RoleModel = mongoose.model("Role", RoleSchema);
export default RoleModel;
