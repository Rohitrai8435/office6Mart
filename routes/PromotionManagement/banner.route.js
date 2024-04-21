// routes/banner.routes.js

import express from "express";
import * as bannerController from "../../controllers/PromotionManagement/Banner.controller.js";
import { uploadS3 } from "../../middlewares/multer.js";
import isAdmin from "../../middlewares/isstoreAdmin.js";
import isStore from "../../middlewares/isStoreOwner.js";

const router = express.Router();

// Create banner route
router.post(
  "/",
  isStore,
  uploadS3.fields([{ name: "bannerImage", maxCount: 1 }]),
  bannerController.createBanner
);

// Get all banners route
router.get("/", isStore, bannerController.getAllBanners);

// Get banner by ID route
router.get("/:id", isStore, bannerController.getBannerById);

// Update banner by ID route
router.post(
  "/:id",
  isStore,
  uploadS3.fields([{ name: "bannerImage", maxCount: 1 }]),
  bannerController.updateBannerById
);

// Delete banner by ID route
router.delete("/:id", isStore, bannerController.deleteBannerById);

export default router;
