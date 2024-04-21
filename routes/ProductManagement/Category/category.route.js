// routes/category.routes.js

import express from "express";
import * as categoryController from "../../../controllers/ProductManagement/Category/Category.controller.js";
import { uploadS3 } from "../../../middlewares/multer.js";
import isStoreAdmin from "../../../middlewares/isstoreAdmin.js";
import isStore from "../../../middlewares/isStoreOwner.js";
import isAdmin from "../../../middlewares/isstoreAdmin.js";
const router = express.Router();

// Create category route
router.post(
  "/",
  isStore,
  uploadS3.fields([{ name: "image", maxCount: 1 }]),
  categoryController.createCategory
);

// Get category route
router.get("/:id", categoryController.getCategory);

// Get allcategory route
router.get("/", categoryController.getAllCategory);

router.get(
  "/ofadmin/:adminId",
  isStore,
  categoryController.getAllbyAdminCategory
);

// Update category route
router.post(
  "/:id",
  isStore,
  uploadS3.fields([{ name: "image", maxCount: 1 }]),
  categoryController.updateCategory
);

// Delete category route
router.delete("/:id", isStore, categoryController.deleteCategory);

export default router;
//asdasdsdad
