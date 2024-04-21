// routes/itemCampaign.routes.js

import express from "express";
import * as itemCampaignController from "../../controllers/PromotionManagement/ItemCampaign.controller.js";
import { uploadS3 } from "../../middlewares/multer.js";
import isAdmin from "../../middlewares/isstoreAdmin.js";

const router = express.Router();

// Create item campaign route
router.post(
  "/",
  isAdmin,
  uploadS3.fields([{ name: "itemImage", maxCount: 1 }]),
  itemCampaignController.createItemCampaign
);

// Get all item campaigns route
router.get("/", isAdmin, itemCampaignController.getAllItemCampaigns);

// Get item campaign by ID route
router.get("/:id", isAdmin, itemCampaignController.getItemCampaignById);

// Update item campaign by ID route
router.post(
  "/:id",
  isAdmin,
  uploadS3.fields([{ name: "itemImage", maxCount: 1 }]),
  itemCampaignController.updateItemCampaignById
);

// Delete item campaign by ID route
router.delete("/:id", isAdmin, itemCampaignController.deleteItemCampaignById);

export default router;
