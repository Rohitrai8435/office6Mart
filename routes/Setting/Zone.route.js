// routes/zone.routes.js

import express from "express";
import * as zoneController from "../../controllers/Setting/Zone.controller.js";
import isAdmin from "../../middlewares/isstoreAdmin.js";

const router = express.Router();

// Create zone route
router.post("/", isAdmin, zoneController.createZone);

// Get all zones route
router.get("/", zoneController.getAllZones);

// Get zone by ID route
router.get("/:id", zoneController.getZoneById);

// Update zone by ID route
router.put("/:id", isAdmin, zoneController.updateZoneById);

// Delete zone by ID route
router.delete("/:id", isAdmin, zoneController.deleteZoneById);

export default router;
