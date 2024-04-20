// controllers/permission.controller.js

import Role from "../../models/EmployeeManagement/EmployeeRole.model.js";
import { permisionValidationSchema } from "../../validators/EmployeeManagement/permision.validator.js";

// Create permission
export const createPermission = async (req, res) => {
  try {
    const { error } = permisionValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const role = new Role(req.body);
    const savedrole = await role.save();
    res.status(201).json(savedrole);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all permissions
export const getAllPermissions = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get permission by ID
export const getPermissionById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ error: "role not found" });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update permission by ID
export const updatePermissionById = async (req, res) => {
  try {
    const role = await Role.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!role) {
      return res.status(404).json({ error: "role not found" });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete permission by ID
export const deletePermissionById = async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);
    if (!role) {
      return res.status(404).json({ error: "role not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
