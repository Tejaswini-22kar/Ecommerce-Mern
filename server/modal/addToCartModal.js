const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    productName: { type: String, required: true },
    price: {
        mrp: { type: Number, required: true },
        cost: { type: Number, required: true },
        discount: { type: String, required: true }
    },
    quantity: { type: Number, required: true, default: 1 },
    category: { type: String, required: true },
    url: { type: String, required: true }
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
