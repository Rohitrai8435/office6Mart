import mongoose from "mongoose";

const FlashSaleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    adminPercent: {
      type: Number,
      required: true,
    },
    storeOwnwerPercent: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
  },
  { timestamp: true }
);
const FlashsaleModel = mongoose.model("Flashsale", FlashSaleSchema);
export default FlashsaleModel;
