// routes/notification.routes.js

import express from "express";
import * as notificationController from "../../controllers/PromotionManagement/Notification.controller.js";
import { uploadS3 } from "../../middlewares/multer.js";
import isAdmin from "../../middlewares/isstoreAdmin.js";

const router = express.Router();
// Create notification route
router.post(
  "/",
  isAdmin,
  uploadS3.fields([{ name: "image", maxCount: 1 }]),
  notificationController.createNotification
);
// Get all notifications route
router.get("/", isAdmin, notificationController.getAllNotifications);
// Get notification by ID route
router.get("/:id", isAdmin, notificationController.getNotificationById);
// Update notification by ID route
router.post(
  "/:id",
  isAdmin,
  uploadS3.fields([{ name: "image", maxCount: 1 }]),
  notificationController.updateNotificationById
);
// Delete notification by ID route
router.delete("/:id", isAdmin, notificationController.deleteNotificationById);
export default router;
