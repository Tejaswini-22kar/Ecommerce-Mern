const express = require("express");
const mongoose = require("mongoose");  // ✅ Import mongoose
const Product = require("../modal/productModal");
const Cart = require("../modal/addToCartModal");

const stringSimilarity = require("string-similarity");

const router = express.Router();


router.get("/getallproduct", async (req, res) => {
    try {
        const products = await Product.find().lean(); // ✅ Use .lean() to improve performance
        res.status(200).json({ message: "Products fetched successfully", products });
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
});


router.post("/add-to-cart", async (req, res) => {
    try {
        console.log("Incoming Request Body:", req.body);
        const { userId, productId, productName, price, quantity = 1, category, url } = req.body;

        // ✅ Prepare Data for Insertion/Update
        const cartUpdateData = {
            $inc: { quantity },  // Increase quantity dynamically
            $setOnInsert: { userId, productId, productName, price, category, url }
        };

        // ✅ Use `findOneAndUpdate` to Update or Insert
        const cartItem = await Cart.findOneAndUpdate(
            { userId, productId },
            cartUpdateData,
            { new: true, upsert: true }
        );

        // ✅ Get Updated Cart Count
        const cartCount = await Cart.countDocuments({ userId });

        res.status(201).json({
            message: "Item added to cart",
            data: cartItem,
            cartCount
        });

    } catch (error) {
        console.error("❌ Error in add-to-cart:", error);
        res.status(500).json({ message: "Error adding item", error: error.message });
    }
});





router.get("/search", async (req, res) => {
    const query = req.query.search;

    if (!query) return res.status(400).json({ message: "❌ Search query is required" });

    try {
        console.log("🔍 Search Query:", query);

        // ✅ Use case-insensitive regex search instead of fetching all products
        const matchedProducts = await Product.find({
            productName: { $regex: query, $options: "i" }
        }).lean();

        console.log("✅ Similar Products Found:", matchedProducts);
        res.json(matchedProducts);

    } catch (error) {
        console.error("❌ Error fetching products:", error);
        res.status(500).json({ message: "Error fetching products", error });
    }
});


router.get("/cart/count/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        console.log("🔍 Fetching cart count for user:", userId);

        // ✅ Use aggregation to get the total quantity sum
        const result = await Cart.aggregate([
            { $match: { userId: new mongoose.Types.ObjectId(userId) } }, // Ensure `userId` is ObjectId
            { $group: { _id: null, totalQuantity: { $sum: "$quantity" } } }
        ]);

        const count = result.length > 0 ? result[0].totalQuantity : 0;
        console.log("✅ Cart Count:", count);

        res.json({ count });
    } catch (error) {
        console.error("🔥 Server Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});


module.exports = router;
