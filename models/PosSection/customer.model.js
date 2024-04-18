import mongoose from "mongoose";

const CustoemrSchema = mongoose.Schema(
  {
    fistName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "storeowner",
    },
  },
  { timestamp: true }
);
const CustomerModel = mongoose.model("Customer", CustoemrSchema);
export default CustomerModel;
