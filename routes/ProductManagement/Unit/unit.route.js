// routes/unit.routes.js

import express from "express";
import * as unitController from "../../../controllers/ProductManagement/Unit/Unit.controller.js";
import isStoreAdmin from "../../../middlewares/isstoreAdmin.js";
import isStore from "../../../middlewares/isStoreOwner.js";

const router = express.Router();

// Create unit route
router.post("/", isStoreAdmin, unitController.createUnit);

// Get all units route
router.get("/", isStore, unitController.getAllUnits);

// Get unit by ID route
router.get("/:id", unitController.getUnitById);

// Update unit by ID route
router.put("/:id", isStoreAdmin, unitController.updateUnitById);

// Delete unit by ID route
router.delete("/:id", isStoreAdmin, unitController.deleteUnitById);

export default router;
