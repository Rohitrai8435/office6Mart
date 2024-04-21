// routes/employee.routes.js

import express from "express";
import * as employeeController from "../../controllers/EmployeeManagement/employee.controller.js";
import { uploadS3 } from "../../middlewares/multer.js";
import isStoreAdmin from "../../middlewares/isstoreAdmin.js";
import isStore from "../../middlewares/isStoreOwner.js";
const router = express.Router();

// Create employee route
router.post(
  "/",
  isStore,
  uploadS3.fields([{ name: "employeeImage", maxCount: 1 }]),
  employeeController.createEmployee
);

// Get employee route
router.get("/:id", employeeController.getEmployee);

// Get Allemployee route
router.get("/", isStore, employeeController.getAllEmployee);

// Update employee route
router.post(
  "/:id",
  isStore,
  uploadS3.fields([{ name: "employeeImage", maxCount: 1 }]),
  employeeController.updateEmployee
);

// Delete employee route
router.delete("/:id", isStore, employeeController.deleteEmployee);

// Employee login route
router.get("/auth/login", employeeController.employeeLogin);
router.get("/auth/logout", employeeController.employeeLogout);
router.post("/forgotPassword", employeeController.forgotPassword);
router.post("/resetPassword", employeeController.resetPassword);
router.post("/changePassword/:id", employeeController.changePassword);

export default router;
