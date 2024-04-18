// controllers/itemCampaign.controller.js

import { deleteFileFromObjectStorage } from "../../middlewares/multer.js";
import ItemCampaignModel from "../../models/PromotionManagement/ItemCampaigenModel.js";
import { itemCampaignValidationSchema } from "../../validators/PromotionManagement/ItemCampaign.validator.js";

export const createItemCampaign = async (req, res) => {
  try {
    // Validate request body
    const { error } = itemCampaignValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }

    // Create new item campaign
    const itemCampaign = new ItemCampaignModel({
      ...req.body,
      itemImage: req.files?.itemImage.map((doc) => doc.key),
    });
    const savedItemCampaign = await itemCampaign.save();
    res.status(200).json({ success: true, data: savedItemCampaign }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all item campaigns
export const getAllItemCampaigns = async (req, res) => {
  try {
    const itemCampaigns = await ItemCampaignModel.find();
    res.status(200).json({ success: true, data: itemCampaigns }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get item campaign by ID
export const getItemCampaignById = async (req, res) => {
  try {
    const itemCampaign = await ItemCampaignModel.findById(req.params.id);
    if (!itemCampaign) {
      return res
        .status(400)
        .json({ success: false, error: "Item campaign not found" });
    }
    res.status(200).json({ success: true, data: itemCampaign }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update item campaign by ID
export const updateItemCampaignById = async (req, res) => {
  try {
    // Validate request body
    const { error } = itemCampaignValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }

    const updatedItemCampaign = await ItemCampaignModel.findById(req.params.id);
    if (!updatedItemCampaign) {
      return res
        .status(400)
        .json({ success: false, error: "Item campaign not found" });
    }
    if (updatedItemCampaign && updatedItemCampaign.itemImage.length > 0) {
      updatedItemCampaign.itemImage.map((doc) =>
        deleteFileFromObjectStorage(doc)
      );
    }

    // Update item campaign fields
    updatedItemCampaign.title = req.body.title;
    updatedItemCampaign.shortDescription = req.body.shortDescription;
    updatedItemCampaign.itemImage = req.files?.itemImage.map((doc) => doc.key);
    updatedItemCampaign.startDate = req.body.startDate;
    updatedItemCampaign.endDate = req.body.endDate;
    updatedItemCampaign.startTime = req.body.startTime;
    updatedItemCampaign.endTime = req.body.endTime;
    updatedItemCampaign.store = req.body.store;
    updatedItemCampaign.totalStock = req.body.totalStock;
    updatedItemCampaign.maximumCartQuantity = req.body.maximumCartQuantity;
    updatedItemCampaign.category = req.body.category;
    updatedItemCampaign.subCategory = req.body.subCategory;
    updatedItemCampaign.price = req.body.price;
    updatedItemCampaign.discount = req.body.discount;
    updatedItemCampaign.discountType = req.body.discountType;
    updatedItemCampaign.attribute = req.body.attribute;
    await updatedItemCampaign.save();
    res.status(200).json({ success: true, data: updatedItemCampaign }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete item campaign by ID
export const deleteItemCampaignById = async (req, res) => {
  try {
    const deletedItemCampaign = await ItemCampaignModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedItemCampaign) {
      return res
        .status(400)
        .json({ success: false, error: "Item campaign not found" });
    }
    res.status(200).json({ success: true }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
