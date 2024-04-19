import Joi from "@hapi/joi";

export const productValidationSchema = Joi.object({
  name: Joi.string().required(),
  shortDescription: Joi.string(),
  itemImage: Joi.string(),
  itemThumbnail: Joi.string(),
  store: Joi.string().required(), // Assuming store is required
  category: Joi.string().required(), // Assuming category is required

  unit: Joi.string(),
  maximumPurchaseQuantityLimit: Joi.number(),
  price: Joi.number(),
  totalUnit: Joi.number(),
  discounttype: Joi.string(),
  discounttype: Joi.string().valid("Percent", "Amount").required(),
  discount: Joi.number(),
  stock: Joi.number(),
  sold: Joi.number(),
  attribute: Joi.string(),
  tags: Joi.string(),
  isOrganic: Joi.boolean().optional(),
});
