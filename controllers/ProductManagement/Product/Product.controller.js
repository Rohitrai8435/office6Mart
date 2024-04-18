// controllers/product.controller.js

import Product from "../../../models/ProductManagement/Product/Product.model.js";
import { productValidationSchema } from "../../../validators/ProductManagement/Product/product.validator.js";
import { deleteFileFromObjectStorage } from "../../../middlewares/multer.js";

// Create product
export const createProduct = async (req, res) => {
  try {
    // Validate request body
    const { error } = productValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }

    // Create new product
    const product = new Product({
      ...req.body,
      itemImage: req.files?.itemImage?.map((doc) => doc.key),
      itemThumbnail: req.files?.itemThumbnail?.map((doc) => doc.key),
    });
    const savedProduct = await product.save();
    res.status(200).json({ success: true, data: savedProduct }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(400)
        .json({ success: false, error: "Product not found" }); // Changed status to 400
    }
    res.status(200).json({ success: true, data: product }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update product by ID
export const updateProduct = async (req, res) => {
  try {
    const { error } = productValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(400)
        .json({ success: false, error: "Product not found" }); // Changed status to 400
    }
    if (product && product.itemThumbnail.length > 0) {
      await product.itemThumbnail.map((doc) =>
        deleteFileFromObjectStorage(doc)
      );
    }

    if (product && product.itemImage.length > 0) {
      await product.itemImage.map((doc) => deleteFileFromObjectStorage(doc));
    }
    // Updating product fields
    product.name = req.body.name;
    product.shortDescription = req.body.shortDescription;
    product.itemImage = req.files?.itemImage?.map((doc) => doc.key);
    product.itemThumbnail = req.files?.itemThumbnail?.map((doc) => doc.key);
    product.store = req.body.store;
    product.category = req.body.category;
    product.subcategory = req.body.subcategory;
    product.maximumPurchaseQuantityLimit =
      req.body.maximumPurchaseQuantityLimit;
    product.totalstock = req.body.totalstock;
    product.discounttype = req.body.discounttype;
    product.discount = req.body.discount;
    product.attribute = req.body.attribute;
    product.tags = req.body.tags;
    product.unit = req.body.unit;
    product.price = req.body.price;
    await product.save();
    res.status(200).json({ success: true, data: product }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete product by ID
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res
        .status(400)
        .json({ success: false, error: "Product not found" }); // Changed status to 400
    }
    res.status(200).json({ success: true }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
