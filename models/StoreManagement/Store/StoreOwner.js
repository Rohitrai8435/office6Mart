import mongoose from "mongoose";
import { BaseStore } from "./BaseStore.js";

const StoreOwner = new mongoose.Schema({
  storeName: {
    type: String,
  },
  completeAddress: { type: String, required: true },
  vat_tax: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },

  storeLogo: [],
  storeCover: [],
  bestSellingStoreCount: { type: Number, default: 0 },
  topSellingStoreCount: { type: Number, default: 0 },
  mostRatedProduct: { type: Number, default: 0 },

  isDisabled: { type: Boolean, default: false },
  isVisible: { type: Boolean, default: true },
});

const StoreOwnerModel = BaseStore.discriminator("storeowner", StoreOwner);
export default StoreOwnerModel;
