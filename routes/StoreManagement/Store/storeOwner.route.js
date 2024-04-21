// routes/store.routes.js

import express from "express";
import * as storeController from "../../../controllers/StoreManagement/Store/storeOwner.controller.js";
import { uploadS3 } from "../../../middlewares/multer.js";
import isStoreAdmin from "../../../middlewares/isstoreAdmin.js";
const router = express.Router();

// Create store route()
router.post(
  "/",
  isStoreAdmin,
  uploadS3.fields([
    { name: "storeLogo", maxCount: 1 },
    { name: "storeCover", maxCount: 1 },
  ]),
  storeController.createStore
);

// Get store route
router.get("/:id", isStoreAdmin, storeController.getStore);

// Get Allstore route
router.get("/", isStoreAdmin, storeController.getAllStore);

// Update store route
router.post(
  "/:id",
  isStoreAdmin,
  uploadS3.fields([
    { name: "storeLogo", maxCount: 1 },
    { name: "storeCover", maxCount: 1 },
  ]),
  storeController.updateStore
);

// Delete store route
router.delete("/:id", isStoreAdmin, storeController.deleteStore);

// Store login route
router.post("/login", storeController.storeLogin);

// Store login route
router.post("/logout", storeController.storeLogout);
router.post("/forgotPassword", storeController.forgotPassword);
router.post("/resetPassword", storeController.resetPassword);
router.post("/changePassword/:id", storeController.changePassword);

// forgetpassword route

export default router;
