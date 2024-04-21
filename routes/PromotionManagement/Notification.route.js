// routes/notification.routes.js

import express from "express";
import * as notificationController from "../../controllers/PromotionManagement/Notification.controller.js";
import { uploadS3 } from "../../middlewares/multer.js";
import isStoreAdmin from "../../middlewares/isstoreAdmin.js";
const router = express.Router();
// Create notification route
router.post(
  "/",
  isStoreAdmin,
  uploadS3.fields([{ name: "image", maxCount: 1 }]),
  notificationController.createNotification
);
// Get all notifications route
router.get("/", isStoreAdmin, notificationController.getAllNotifications);
// Get notification by ID route
router.get("/:id", isStoreAdmin, notificationController.getNotificationById);
// Update notification by ID route
router.post(
  "/:id",
  isStoreAdmin,
  uploadS3.fields([{ name: "image", maxCount: 1 }]),
  notificationController.updateNotificationById
);
// Delete notification by ID route
router.delete(
  "/:id",
  isStoreAdmin,
  notificationController.deleteNotificationById
);
export default router;
