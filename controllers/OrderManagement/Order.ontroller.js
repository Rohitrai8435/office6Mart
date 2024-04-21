// controllers/order.controller.js

import Order from "../../models/OrderManagement/Order.model.js";
import { orderValidationSchema } from "../../validators/OrderManagement/Order.validator.js";

// Create order
export const createOrder = async (req, res) => {
  try {
    // Validate request body
    const { error } = orderValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }

    // Create new order
    const order = new Order({
      ...req.body,
      orderId: Math.floor(Math.random() * 1000000 + 1),
    });
    const savedOrder = await order.save();
    res.status(200).json({ success: true, data: savedOrder }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ success: true, data: orders }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(400).json({ success: false, error: "Order not found" });
    }
    res.status(200).json({ success: true, data: order }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update order by ID
export const updateOrderById = async (req, res) => {
  try {
    // Validate request body
    const { error } = orderValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedOrder) {
      return res.status(400).json({ success: false, error: "Order not found" });
    }
    res.status(200).json({ success: true, data: updatedOrder }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete order by ID
export const deleteOrderById = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(400).json({ success: false, error: "Order not found" });
    }
    res.status(200).json({ success: true }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
