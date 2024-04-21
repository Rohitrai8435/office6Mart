// routes/category.routes.js

import express from "express";
import * as categoryController from "../../../controllers/ProductManagement/Category/Category.controller.js";
import { uploadS3 } from "../../../middlewares/multer.js";
import isStoreAdmin from "../../../middlewares/isstoreAdmin.js";
import isStore from "../../../middlewares/isStoreOwner.js";
const router = express.Router();

// Create category route
router.post(
  "/",
  isStoreAdmin,
  uploadS3.fields([{ name: "image", maxCount: 1 }]),
  categoryController.createCategory
);

// Get category route
router.get("/:id", categoryController.getCategory);

router.get("/", categoryController.getAllCategory);
router.get(
  "/ofadmin/:adminId",
  isStore,
  categoryController.getAllbyAdminCategory
);

// Update category route
router.post(
  "/:id",
  isStoreAdmin,
  uploadS3.fields([{ name: "image", maxCount: 1 }]),
  categoryController.updateCategory
);

// Delete category route
router.delete("/:id", isStoreAdmin, categoryController.deleteCategory);

export default router;
//asdasdsdad
