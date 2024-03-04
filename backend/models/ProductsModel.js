const mongoose = require("mongoose");
const ProductsTemplate = new mongoose.Schema({
  nameproduct: {
    type: String,
    required: true,
  },
  imageproduct: {
    type: String,
    required: true,
  },
  descriptionproduct: {
    type: String,
    required: true,
    unique: true,
  },
  quantityproduct: {
    type: String,
    required: true,
  },
  dateproduct: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("products", ProductsTemplate);
