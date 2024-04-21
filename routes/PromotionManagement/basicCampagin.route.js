// routes/campaign.routes.js

import express from "express";
import * as campaignController from "../../controllers/PromotionManagement/BasicCampaign.controller.js";
import { uploadS3 } from "../../middlewares/multer.js";
import isStoreAdmin from "../../middlewares/isstoreAdmin.js";

const router = express.Router();

// Create campaign route
router.post(
  "/",
  isStoreAdmin,
  uploadS3.fields([{ name: "itemImage", maxCount: 1 }]),
  campaignController.createCampaign
);

// Get all campaigns route
router.get("/", isStoreAdmin, campaignController.getAllCampaigns);

// Get campaign by ID route
router.get("/:id", isStoreAdmin, campaignController.getCampaignById);

// Update campaign by ID route
router.post(
  "/:id",
  isStoreAdmin,
  uploadS3.fields([{ name: "itemImage", maxCount: 1 }]),
  campaignController.updateCampaignById
);

// Delete campaign by ID route
router.delete("/:id", isStoreAdmin, campaignController.deleteCampaignById);

export default router;
