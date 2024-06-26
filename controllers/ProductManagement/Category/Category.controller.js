import { v1 as uuidv1 } from "uuid";
import Category from "../../../models/ProductManagement/Category/Category.model.js";
import { CategoryCreationSchema } from "../../../validators/ProductManagement/Category/category.validator.js";
import { deleteFileFromObjectStorage } from "../../../middlewares/multer.js";
import BaseCategory from "../../../models/ProductManagement/Category/BaseCategory.model.js";
// Create category
export const createCategory = async (req, res) => {
  try {
    const data = req.body;
    const { name, admin } = req.body;
    const { error } = CategoryCreationSchema.validate(data);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }
    const getAllCategoryCount = await BaseCategory.countDocuments();

    const category = new Category({
      id: getAllCategoryCount + 1,
      name,
      admin,
      image: req.files?.image?.map((doc) => doc.key),
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
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res
        .status(400)
        .json({ success: false, error: "Category not found" });
    }
    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const category = await Category.find().populate("admin");
    if (!category) {
      return res
        .status(400)
        .json({ success: false, error: "Category not found" });
    }
    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
export const getAllbyAdminCategory = async (req, res) => {
  try {
    const category = await Category.find({
      admin: req.params.adminId,
    }).populate("admin");
    if (!category) {
      return res
        .status(400)
        .json({ success: false, error: "Category not found" });
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
    const { error } = CategoryCreationSchema.validate(data);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }
    const category = await Category.findById({ _id: req.params.id });
    if (!category) {
      return res
        .status(400)
        .json({ success: false, error: "Category not found" });
    }
    if (category && category.image.length > 0) {
      await category.image.map((doc) => deleteFileFromObjectStorage(doc));
    }

    if (category && category.image.length > 0) {
      await category.image.map((doc) => deleteFileFromObjectStorage(doc));
    }
    category.name = req.body.name;
    category.image = req.files?.image?.map((doc) => doc.key);
    await category.save();
    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete category by ID
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res
        .status(400)
        .json({ success: false, error: "Category not found" });
    }
    res.status(200).json({ success: true, message: "Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
