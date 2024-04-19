import Joi from "@hapi/joi";

// Validation schema for store creation
export const attributeValidationSchema = Joi.object({
  name: Joi.string().max(32).required(),
  admin: Joi.string().max(32).required(),
});
