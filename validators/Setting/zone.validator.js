// validators/zone.validator.js

import Joi from "joi";

// Joi validation schema for the Zone model
export const zoneValidationSchema = Joi.object({
  name: Joi.string().required(),
});
