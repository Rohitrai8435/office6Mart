// controllers/category.controller.js
import { v1 as uuidv1 } from "uuid";
import SubCategory from "../../../models/ProductManagement/Category/SubCotegory.model.js";
import { SubCategoryCreationSchema } from "../../../validators/ProductManagement/Category/category.validator.js";
import BaseCategory from "../../../models/ProductManagement/Category/BaseCategory.model.js";
// Create categor
export const createCategory = async (req, res) => {
  try {
    const data = req.body;
    const { name, mainCategory, admin } = data;
    const { error } = SubCategoryCreationSchema.validate(data);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }
    const getAllCategoryCount = await BaseCategory.countDocuments();
    const category = new SubCategory({
      id: getAllCategoryCount + 1,
      name,
      mainCategory,
      admin,
    });
    const savedCategory = await category.save();
    res.status(200).json({ success: true, savedCategory });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get category by ID
export const getCategory = async (req, res) => {
  try {
    const category = await SubCategory.findById(req.params.id);
    if (!category) {
      return res
        .status(400)
        .json({ success: false, error: "SubCategory not found" });
    }
    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
export const getAllCategory = async (req, res) => {
  try {
    const category = await SubCategory.find().populate("admin mainCategory");
    if (!category) {
      return res
        .status(400)
        .json({ success: false, error: "SubCategory not found" });
    }
    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
export const getByAdminCategory = async (req, res) => {
  try {
    const category = await SubCategory.find({
      admin: req.params.adminId,
    }).populate("admin mainCategory");
    if (!category) {
      return res
        .status(400)
        .json({ success: false, error: "SubCategory not found" });
    }
    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update category by ID
export const updateCategory = async (req, res) => {
  try {
    const data = req.body;
    const { error } = SubCategoryCreationSchema.validate(data);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const category = await SubCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!category) {
      return res
        .status(400)
        .json({ success: false, error: "SubCategory not found" });
    }
    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete category by ID
export const deleteCategory = async (req, res) => {
  try {
    const category = await SubCategory.findByIdAndDelete(req.params.id);
    if (!category) {
      return res
        .status(400)
        .json({ success: false, error: "SubCategory not found" });
    }
    res.status(200).json({ success: true, message: "Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
