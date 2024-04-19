import mongoose from "mongoose";

const Unitschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);
const UnitMidel = mongoose.model("Unit", Unitschema);
export default UnitMidel;
