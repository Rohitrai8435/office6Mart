// routes/coupon.routes.js

import express from "express";
import * as couponController from "../../controllers/PromotionManagement/Coupon.controller.js";
import isStoreAdmin from "../../middlewares/isstoreAdmin.js";

const router = express.Router();

// Create coupon route
router.post("/", isStoreAdmin, couponController.createCoupon);

// Get all coupons route
router.get("/", isStoreAdmin, couponController.getAllCoupons);

// Get coupon by ID route
router.get("/:id", isStoreAdmin, couponController.getCouponById);

// Update coupon by ID route
router.post("/:id", isStoreAdmin, couponController.updateCouponById);

// Delete coupon by ID route
router.delete("/:id", isStoreAdmin, couponController.deleteCouponById);

export default router;
