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
  tags: {
    type: String,
  },
  stock: {
    type: Number,
  },
  sold: {
    type: Number,
  },
});

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
