import Joi from "@hapi/joi";

export const productValidationSchema = Joi.object({
  name: Joi.string().required(),
  shortDescription: Joi.string().required(),
  category: Joi.string().required(),
  unit: Joi.string().required(),
  maximumPurchaseQuantityLimit: Joi.number().required(),
  price: Joi.number().required(),
  totalUnit: Joi.number().required(),
  discounttype: Joi.string().required(),
  discounttype: Joi.string().valid("Percent", "Amount").required(),
  discount: Joi.number().required(),
  stock: Joi.number().required(),
  sold: Joi.number().required(),
  attribute: Joi.string().required(),
  tags: Joi.array().required(),
});
