// validators/customer.validator.js

import Joi from "joi";

// Joi validation schema for the Customer model
export const customerValidationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  store: Joi.string(), // Assuming store is optional
});
