// routes/permission.routes.js

import express from "express";
import * as permissionController from "../../../controllers/EmployeeManagement/employeeRole.controller.js";
import isStoreAdmin from "../../../middlewares/isstoreAdmin.js";

const router = express.Router();

// Create permission route
router.post("/", isStoreAdmin, permissionController.createPermission);

// Get all permissions route
router.get("/", isStoreAdmin, permissionController.getAllPermissions);

// Get permission by ID route
router.get("/:id", isStoreAdmin, permissionController.getPermissionById);

// Update permission by ID route
router.put("/:id", isStoreAdmin, permissionController.updatePermissionById);

// Delete permission by ID route
router.delete("/:id", isStoreAdmin, permissionController.deletePermissionById);

export default router;
