// validators/order.validator.js

import Joi from "joi";

// Joi validation schema for the Order model
export const orderValidationSchema = Joi.object({
  orderId: Joi.string().required(),
  customer: Joi.string().required(),
  store: Joi.string().required(),
  itemQuantity: Joi.number().required(),
  totalAmount: Joi.number().required(),
  orderStatus: Joi.string()
    .valid(
      "Pending",
      "Confirmed",
      "Processing",
      "Out for delivery",
      "Delivered",
      "Failed",
      "Canceled",
      "RefundRequest",
      "Refunded"
    )
    .default("Processing"),
});
