// routes/product.routes.js

import express from "express";
import { uploadS3 } from "../../../middlewares/multer.js";
import * as productController from "../../../controllers/ProductManagement/Product/Product.controller.js";
import isStoreAdmin from "../../../middlewares/isstoreAdmin.js";
import isStore from "../../../middlewares/isStoreOwner.js";

const router = express.Router();

// Create product route
router.post(
  "/",
  isStore,
  uploadS3.fields([
    { name: "itemImage", maxCount: 1 },
    { name: "itemThumbnail", maxCount: 1 },
  ]),
  productController.createProduct
);

// Get product route
router.get("/:id", productController.getProduct);

// Get Allproduct route
router.get("/", isStore, productController.getAllProduct);

// Update product route
router.post(
  "/:id",
  isStore,
  uploadS3.fields([
    { name: "itemImage", maxCount: 1 },
    { name: "itemThumbnail", maxCount: 1 },
  ]),
  productController.updateProduct
);

// Delete product route
router.delete("/:id", isStore, productController.deleteProduct);

export default router;
