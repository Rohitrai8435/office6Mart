import mongoose from "mongoose";

const ZoneSchema = mongoose.Schema(
  {
    zone: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);
const ZoneModel = mongoose.model("Zone", ZoneSchema);
export default ZoneModel;
