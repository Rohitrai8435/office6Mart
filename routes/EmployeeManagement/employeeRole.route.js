// routes/permission.routes.js

import express from "express";
import * as permissionController from "../../controllers/EmployeeManagement/employeeRole.controller.js";
import isStoreAdmin from "../../middlewares/isstoreAdmin.js";
import isStore from "../../middlewares/isStoreOwner.js";

const router = express.Router();

// Create permission route
router.post("/", isStore, permissionController.createPermission);

// Get all permissions route
router.get("/", isStore, permissionController.getAllPermissions);

// Get permission by ID route
router.get("/:id", isStore, permissionController.getPermissionById);

// Update permission by ID route
router.put("/:id", isStore, permissionController.updatePermissionById);

// Delete permission by ID route
router.delete("/:id", isStore, permissionController.deletePermissionById);

export default router;
