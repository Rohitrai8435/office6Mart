import Joi from "@hapi/joi";

// Validation schema for store creation
export const unitValidationSchema = Joi.object({
  name: Joi.string().max(32).required(),
});
