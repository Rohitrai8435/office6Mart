// validators/flashsale.validator.js

import Joi from "joi";

// Joi validation schema for the FlashSale model
export const flashsaleValidationSchema = Joi.object({
  title: Joi.string().required(),
  adminPercent: Joi.number().required(),
  storeOwnerPercent: Joi.number().required(),
  startDate: Joi.date(),
  endDate: Joi.date(),
});
