import mongoose from "mongoose";

const ZoneSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admin",
    },
  },
  { timestamp: true }
);
const ZoneModel = mongoose.model("Zone", ZoneSchema);
export default ZoneModel;
