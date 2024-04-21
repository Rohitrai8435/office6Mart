import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  itemImage: [],
  itemThumbnail: [],
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "storeowner",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin",
  },
  unit: {
    type: String,
  },
  maximumPurchaseQuantityLimit: {
    type: Number,
  },
  price: {
    type: Number,
  },
  totalUnit: {
    type: Number,
  },
  discounttype: {
    type: String,
    emun: ["Percent", "Amount"],
    default: "Amount",
  },
  discount: {
    type: Number,
  },
  attribute: {
    type: String,
  },
  tags: [{ type: Array }],
  stock: {
    type: Number,
    default: 0,
  },
  sold: {
    type: Number,
    default: 0,
  },
  bestSellingProductCount: { type: Number, default: 0 },
  topSellingProductCount: { type: Number, default: 0 },
  mostRatedProductCount: { type: Number, default: 0 },

  isDisabled: { type: Boolean, default: false },
  isVisible: { type: Boolean, default: true },
});

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
