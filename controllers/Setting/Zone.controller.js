// controllers/zone.controller.js

import ZoneModel from "../../models/Setting/Zone.model.js";
import { zoneValidationSchema } from "../../validators/Setting/zone.validator.js";

// Create zone
export const createZone = async (req, res) => {
  try {
    // Validate request body
    const { error } = zoneValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Create new zone
    const zone = new ZoneModel({...req.body,admin:req.profile._id});
    const savedZone = await zone.save();
    res.status(201).json(savedZone);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all zones
export const getAllZones = async (req, res) => {
  try {
    const zones = await ZoneModel.find();
    res.status(200).json(zones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get zone by ID
export const getZoneById = async (req, res) => {
  try {
    const zone = await ZoneModel.findById(req.params.id);
    if (!zone) {
      return res.status(404).json({ error: "Zone not found" });
    }
    res.status(200).json(zone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update zone by ID
export const updateZoneById = async (req, res) => {
  try {
    // Validate request body
    const { error } = zoneValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const updatedZone = await ZoneModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedZone) {
      return res.status(404).json({ error: "Zone not found" });
    }
    res.status(200).json(updatedZone);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete zone by ID
export const deleteZoneById = async (req, res) => {
  try {
    const deletedZone = await ZoneModel.findByIdAndDelete(req.params.id);
    if (!deletedZone) {
      return res.status(404).json({ error: "Zone not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
