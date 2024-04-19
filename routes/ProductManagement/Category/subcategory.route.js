// routes/category.routes.js

import express from "express";
import * as subcategoryController from "../../../controllers/ProductManagement/Category/SubCategory.controller.js";

const router = express.Router();

// Create category route
router.post("/", subcategoryController.createCategory);

// Get category route
router.get("/:id", subcategoryController.getCategory);

//get all subcategory
router.get("/", subcategoryController.getAllCategory);

//get all sub category for admin
router.get("/ofadmin/:adminId", subcategoryController.getByAdminCategory);

router.get("/ofmainCategory", subcategoryController.getCategoryByMainCategory);

// Update category route
router.put("/:id", subcategoryController.updateCategory);

// Delete category route
router.delete("/:id", subcategoryController.deleteCategory);

export default router;
