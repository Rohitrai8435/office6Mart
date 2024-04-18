// controllers/coupon.controller.js

import Coupon from "../../models/PromotionManagement/Coupon.model.js";
import { couponValidationSchema } from "../../validators/PromotionManagement/Coupon.validator.js";

// Create coupon
export const createCoupon = async (req, res) => {
  try {
    // Validate request body
    const { error } = couponValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }

    // Create new coupon
    const coupon = new Coupon(req.body);
    const savedCoupon = await coupon.save();
    res.status(200).json({ success: true, data: savedCoupon }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all coupons
export const getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json({ success: true, data: coupons }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get coupon by ID
export const getCouponById = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    if (!coupon) {
      return res
        .status(400)
        .json({ success: false, error: "Coupon not found" });
    }
    res.status(200).json({ success: true, data: coupon }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update coupon by ID
export const updateCouponById = async (req, res) => {
  try {
    // Validate request body
    const { error } = couponValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }

    const updatedCoupon = await Coupon.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedCoupon) {
      return res
        .status(400)
        .json({ success: false, error: "Coupon not found" });
    }
    res.status(200).json({ success: true, data: updatedCoupon }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete coupon by ID
export const deleteCouponById = async (req, res) => {
  try {
    const deletedCoupon = await Coupon.findByIdAndDelete(req.params.id);
    if (!deletedCoupon) {
      return res
        .status(400)
        .json({ success: false, error: "Coupon not found" });
    }
    res.status(200).json({ success: true }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
