// validators/campaign.validator.js

import Joi from "joi";

// Joi validation schema for the BaseCampaign model
export const campaignValidationSchema = Joi.object({
  title: Joi.string().required(),
  shortDescription: Joi.string().required(),
  itemImage: Joi.array().items(Joi.string()).required(), // Assuming itemImage is an array of strings (image URLs)
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  startTime: Joi.date().required(),
  endTime: Joi.date().required(),
});
