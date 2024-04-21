// routes/employee.routes.js

import express from "express";
import * as employeeController from "../../controllers/EmployeeManagement/employee.controller.js";
import { uploadS3 } from "../../middlewares/multer.js";
import isStoreAdmin from "../../middlewares/isstoreAdmin.js";
const router = express.Router();

// Create employee route
router.post(
  "/",
  isStoreAdmin,
  uploadS3.fields([{ name: "employeeImage", maxCount: 1 }]),
  employeeController.createEmployee
);

// Get employee route
router.get("/:id", isStoreAdmin, employeeController.getEmployee);

// Update employee route
router.post(
  "/:id",
  isStoreAdmin,
  uploadS3.fields([{ name: "employeeImage", maxCount: 1 }]),
  employeeController.updateEmployee
);

// Delete employee route
router.delete("/:id", isStoreAdmin, employeeController.deleteEmployee);

// Employee login route
router.post("/login", employeeController.employeeLogin);
router.post("/logout", employeeController.employeeLogout);
router.post("/forgotPassword", employeeController.forgotPassword);
router.post("/resetPassword", employeeController.resetPassword);
router.post("/changePassword/:id", employeeController.changePassword);

export default router;
