// routes/attribute.routes.js

import express from "express";
import * as attributeController from "../../../controllers/ProductManagement/Attribute/attribute.controller.js";
import isStoreAdmin from "../../../middlewares/isstoreAdmin.js";

const router = express.Router();

// Create attribute route
router.post("/", isStoreAdmin, attributeController.createAttribute);

// Get all attributes route
router.get("/", isStoreAdmin, attributeController.getAllAttributes);

// Get attribute by ID route
router.get("/:id", isStoreAdmin, attributeController.getAttributeById);

// Update attribute by ID route
router.put("/:id", isStoreAdmin, attributeController.updateAttributeById);

// Delete attribute by ID route
router.delete("/:id", isStoreAdmin, attributeController.deleteAttributeById);

export default router;
