import mongoose from "mongoose";

const Unitschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamp: true }
);
const UnitMidel = mongoose.model("Unit", Unitschema);
export default UnitMidel;
