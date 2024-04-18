// controllers/banner.controller.js

import { deleteFileFromObjectStorage } from "../../middlewares/multer.js";
import Banner from "../../models/PromotionManagement/BannerModel.js";
import { bannerValidationSchema } from "../../validators/PromotionManagement/Banner.validator.js";

// Create banner
export const createBanner = async (req, res) => {
  try {
    // Validate request body
    const { error } = bannerValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }

    // Create new banner
    const banner = new Banner({
      ...req.body,
      bannerImage: req.files?.bannerImage?.map((doc) => doc.key),
    });
    const savedBanner = await banner.save();
    res.status(200).json({ success: true, data: savedBanner }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all banners
export const getAllBanners = async (req, res) => {
  try {
    const banners = await Banner.find();
    res.status(200).json({ success: true, data: banners }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get banner by ID
export const getBannerById = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      return res
        .status(400)
        .json({ success: false, error: "Banner not found" });
    }
    res.status(200).json({ success: true, data: banner }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update banner by ID
export const updateBannerById = async (req, res) => {
  try {
    // Validate request body
    const { error } = bannerValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    }

    const updatedBanner = await Banner.findById(req.params.id);
    if (!updatedBanner) {
      return res
        .status(400)
        .json({ success: false, error: "Banner not found" });
    }

    if (updatedBanner && updatedBanner.bannerImage.length > 0) {
      updatedBanner.bannerImage.map((doc) => deleteFileFromObjectStorage(doc));
    }

    // Updating banner fields
    updatedBanner.title = req.body.title;
    updatedBanner.zone = req.body.zone;
    updatedBanner.bannerType = req.body.bannerType;
    updatedBanner.store = req.body.store;
    updatedBanner.defaultLink = req.body.defaultLink;
    updatedBanner.bannerImage = req.files?.bannerImage?.map((doc) => doc.key);

    await updatedBanner.save();
    res.status(200).json({ success: true, data: updatedBanner }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete banner by ID
export const deleteBannerById = async (req, res) => {
  try {
    const deletedBanner = await Banner.findByIdAndDelete(req.params.id);
    if (!deletedBanner) {
      return res
        .status(400)
        .json({ success: false, error: "Banner not found" });
    }
    res.status(200).json({ success: true }); // Changed response format
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
