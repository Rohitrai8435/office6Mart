// routes/category.routes.js

import express from "express";
import * as subcategoryController from "../../../controllers/ProductManagement/Category/SubCategory.controller.js";
import isStoreAdmin from "../../../middlewares/isstoreAdmin.js";
import isStore from "../../../middlewares/isStoreOwner.js";

const router = express.Router();

// Create category route
router.post("/", isStore, subcategoryController.createCategory);

// Get category route
router.get("/:id", subcategoryController.getCategory);

//get all subcategory and by main category
router.get("/", subcategoryController.getAllCategory);

//get all sub category for admin
router.get(
  "/ofadmin/:adminId",
  isStore,
  subcategoryController.getByAdminCategory
);

// Update category route
router.put("/:id", isStore, subcategoryController.updateCategory);

// Delete category route
router.delete("/:id", isStore, subcategoryController.deleteCategory);

export default router;
