// routes/order.routes.js

import express from "express";
import * as orderController from "../../controllers/OrderManagement/Order.ontroller.js";

const router = express.Router();

// Create order route
router.post("/", orderController.createOrder);

// Get all orders route
router.get("/", orderController.getAllOrders);

// Get order by ID route
router.get("/:id", orderController.getOrderById);

// Update order by ID route
router.put("/:id", orderController.updateOrderById);

// Delete order by ID route
router.delete("/:id", orderController.deleteOrderById);

export default router;
