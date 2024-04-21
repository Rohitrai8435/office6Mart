// validators/order.validator.js

import Joi from "joi";

// Joi validation schema for the Order model
export const orderValidationSchema = Joi.object({
  customer: Joi.string().required(),
  store: Joi.string().required(),
  itemQuantity: Joi.number().required(),
  totalAmount: Joi.number().required(),
});
