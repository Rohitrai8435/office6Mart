// controllers/notification.controller.js

import { deleteFileFromObjectStorage } from "../../middlewares/multer.js";
import Notification from "../../models/PromotionManagement/Notification.model.js";
import { notificationValidationSchema } from "../../validators/PromotionManagement/Notification.validator.js";

// Create notification
export const createNotification = async (req, res) => {
  try {
    // Validate request body
    const { error } = notificationValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }

    // Create new notification
    const notification = new Notification({
      ...req.body,
      image: req.files?.image.map((doc) => doc.key),
    });
    const savedNotification = await notification.save();
    res.status(200).json({ success: true, data: savedNotification }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all notifications
export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json({ success: true, data: notifications }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get notification by ID
export const getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res
        .status(400)
        .json({ success: false, error: "Notification not found" });
    }
    res.status(200).json({ success: true, data: notification }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update notification by ID
export const updateNotificationById = async (req, res) => {
  try {
    // Validate request body
    const { error } = notificationValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }

    const updatedNotification = await Notification.findById(req.params.id);
    if (!updatedNotification) {
      return res
        .status(400)
        .json({ success: false, error: "Notification not found" });
    }
    if (updatedNotification && updatedNotification.image.length > 0) {
      updatedNotification.image.map((doc) => deleteFileFromObjectStorage(doc));
    }

    // Update notification fields
    updatedNotification.title = req.body.title;
    updatedNotification.zone = req.body.zone;
    updatedNotification.sendTo = req.body.sendTo;
    updatedNotification.description = req.body.description;
    updatedNotification.image = req.files?.image.map((doc) => doc.key);

    await updatedNotification.save();
    res.status(200).json({ success: true, data: updatedNotification }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete notification by ID
export const deleteNotificationById = async (req, res) => {
  try {
    const deletedNotification = await Notification.findByIdAndDelete(
      req.params.id
    );
    if (!deletedNotification) {
      return res
        .status(400)
        .json({ success: false, error: "Notification not found" });
    }
    res.status(200).json({ success: true }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
