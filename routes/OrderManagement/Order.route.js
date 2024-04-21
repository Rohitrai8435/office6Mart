// routes/order.routes.js

import express from "express";
import * as orderController from "../../controllers/OrderManagement/Order.ontroller.js";
import isStore from "../../middlewares/isStoreOwner.js";

const router = express.Router();

// Create order route
router.post("/", isStore, orderController.createOrder);

// Get all orders route
router.get("/", isStore, orderController.getAllOrders);

// Get order by ID route
router.get("/:id", orderController.getOrderById);

// Update order by ID route
router.put("/:id", isStore, orderController.updateOrderById);

// Delete order by ID route
router.delete("/:id", isStore, orderController.deleteOrderById);

export default router;
