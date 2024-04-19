// controllers/flashsale.controller.js

import FlashsaleModel from "../../models/OrderManagement/Flashsale.Model.js";
import { flashsaleValidationSchema } from "../../validators/OrderManagement/Flashsale.validator.js";

// Create flash sale
export const createFlashsale = async (req, res) => {
  try {
    // Validate request body
    const { error } = flashsaleValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Create new flash sale
    const flashsale = new FlashsaleModel(req.body);
    const savedFlashsale = await flashsale.save();
    res.status(201).json(savedFlashsale);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all flash sales
export const getAllFlashsales = async (req, res) => {
  try {
    const flashsales = await FlashsaleModel.find();
    res.status(200).json(flashsales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get flash sale by ID
export const getFlashsaleById = async (req, res) => {
  try {
    const flashsale = await FlashsaleModel.findById(req.params.id);
    if (!flashsale) {
      return res.status(404).json({ error: "Flash sale not found" });
    }
    res.status(200).json(flashsale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update flash sale by ID
export const updateFlashsaleById = async (req, res) => {
  try {
    // Validate request body
    const { error } = flashsaleValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const updatedFlashsale = await FlashsaleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedFlashsale) {
      return res.status(404).json({ error: "Flash sale not found" });
    }
    res.status(200).json(updatedFlashsale);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete flash sale by ID
export const deleteFlashsaleById = async (req, res) => {
  try {
    const deletedFlashsale = await FlashsaleModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedFlashsale) {
      return res.status(404).json({ error: "Flash sale not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
