// routes/flashsale.routes.js

import express from "express";
import * as flashsaleController from "../../controllers/OrderManagement/Flashsale.controller.js";

const router = express.Router();

// Create flash sale route
router.post("/", flashsaleController.createFlashsale);

// Get all flash sales route
router.get("/", flashsaleController.getAllFlashsales);

// Get flash sale by ID route
router.get("/:id", flashsaleController.getFlashsaleById);

// Update flash sale by ID route
router.put("/:id", flashsaleController.updateFlashsaleById);

// Delete flash sale by ID route
router.delete("/:id", flashsaleController.deleteFlashsaleById);

export default router;
