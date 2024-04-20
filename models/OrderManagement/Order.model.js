import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    orderId: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "storeowner",
      required: true,
    },
    itemQuantity: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: [
        "Pending",
        "Confirmed",
        "Processing",
        "Out for delivery",
        "Delivered",
        "Failed",
        "Canceled",
        "RefundRequest",
        "Refunded",
      ],
      default: "Processing",
    },
  },
  { timestamp: true }
);
const OrderModel = mongoose.model("Order", OrderSchema);
export default OrderModel;
