import mongoose from "mongoose";

const AttributeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamp: true }
);
const AttributeModel = mongoose.model("Attribute", AttributeSchema);
export default AttributeModel;
