// routes/banner.routes.js

import express from "express";
import * as bannerController from "../../controllers/PromotionManagement/Banner.controller.js";
import { uploadS3 } from "../../middlewares/multer.js";
import isStoreAdmin from "../../middlewares/isstoreAdmin.js";
const router = express.Router();

// Create banner route
router.post(
  "/",
  isStoreAdmin,
  uploadS3.fields([{ name: "bannerImage", maxCount: 1 }]),
  bannerController.createBanner
);

// Get all banners route
router.get("/", isStoreAdmin, bannerController.getAllBanners);

// Get banner by ID route
router.get("/:id", isStoreAdmin, bannerController.getBannerById);

// Update banner by ID route
router.post(
  "/:id",
  isStoreAdmin,
  uploadS3.fields([{ name: "bannerImage", maxCount: 1 }]),
  bannerController.updateBannerById
);

// Delete banner by ID route
router.delete("/:id", isStoreAdmin, bannerController.deleteBannerById);

export default router;
