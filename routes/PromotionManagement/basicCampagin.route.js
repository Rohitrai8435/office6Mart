// routes/campaign.routes.js

import express from "express";
import * as campaignController from "../../controllers/PromotionManagement/BasicCampaign.controller.js";
import { uploadS3 } from "../../middlewares/multer.js";
import isAdmin from "../../middlewares/isstoreAdmin.js";

const router = express.Router();

// Create campaign route
router.post(
  "/",
  isAdmin,
  uploadS3.fields([{ name: "itemImage", maxCount: 1 }]),
  campaignController.createCampaign
);

// Get all campaigns route
router.get("/", isAdmin, campaignController.getAllCampaigns);

// Get campaign by ID route
router.get("/:id", isAdmin, campaignController.getCampaignById);

// Update campaign by ID route
router.post(
  "/:id",
  isAdmin,
  uploadS3.fields([{ name: "itemImage", maxCount: 1 }]),
  campaignController.updateCampaignById
);

// Delete campaign by ID route
router.delete("/:id", isAdmin, campaignController.deleteCampaignById);

export default router;
