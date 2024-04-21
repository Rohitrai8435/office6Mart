import BaseCategory from "./BaseCategory.model.js";
import mongoose from "mongoose";
const categorySchema = mongoose.Schema({
  image: [],
  topCategoryCount: { type: Number, default: 0 },
  topSellingCategoryCount: { type: Number, default: 0 },
  isDisabled: { type: Boolean, default: false },
  isVisible: { type: Boolean, default: true },
});
const CategoryModel = BaseCategory.discriminator("Category", categorySchema);
export default CategoryModel;
