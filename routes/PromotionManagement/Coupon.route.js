// routes/coupon.routes.js

import express from "express";
import * as couponController from "../../controllers/PromotionManagement/Coupon.controller.js";
import isAdmin from "../../middlewares/isstoreAdmin.js";
import isStore from "../../middlewares/isStoreOwner.js";

const router = express.Router();

// Create coupon route
router.post("/", isStore, couponController.createCoupon);

// Get all coupons route
router.get("/", isStore, couponController.getAllCoupons);

// Get coupon by ID route
router.get("/:id", isStore, couponController.getCouponById);

// Update coupon by ID route
router.post("/:id", isStore, couponController.updateCouponById);

// Delete coupon by ID route
router.delete("/:id", isStore, couponController.deleteCouponById);

export default router;
