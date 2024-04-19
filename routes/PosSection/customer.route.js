// routes/customer.routes.js

import express from "express";
import * as customerController from "../../controllers/PosSection/Customer.controller.js";

const router = express.Router();

// Create customer route
router.post("/", customerController.createCustomer);

// Get all customers route
router.get("/", customerController.getAllCustomers);

// Get customer by ID route
router.get("/:id", customerController.getCustomerById);

// Update customer by ID route
router.put("/:id", customerController.updateCustomerById);

// Delete customer by ID route
router.delete("/:id", customerController.deleteCustomerById);

export default router;
