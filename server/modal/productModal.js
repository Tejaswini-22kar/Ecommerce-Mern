const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    url: { type: String, required: true },
    detailUrl: { type: String, required: true },
    title: {
        shortTitle: { type: String, required: true },
        longTitle: { type: String, required: true }
    },
    price: {
        mrp: { type: Number, required: true },
        cost: { type: Number, required: true },
        discount: { type: String, required: true }
    },
    quantity: { type: Number, default: 0 },
    description: { type: String },
    discount: { type: String, default: "" },
    tagline: { type: String, default: "" },
    category: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    isOnSale: { type: Boolean, default: false },
    isOffer: { type: Boolean, default: false }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
