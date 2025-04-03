import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementCartCount } from "../../redux/CartSlice"; // ✅ Import Redux action

function AddToCart({ item }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false); // ✅ Loading state

    const addToCartHandler = async () => {
        if (loading) return; // Prevent multiple clicks

        try {
            setLoading(true); // ✅ Start loading

            const userId = localStorage.getItem("userId");

            if (!userId) {
                navigate("/login");
                return;
            }

            if (!item?._id) {
                alert("Invalid product. Please try again.");
                return;
            }

            // ✅ Extract price safely
            const price = Number(item.price?.cost || item.price?.mrp);
            if (isNaN(price) || price <= 0) {
                alert("Invalid product price. Please try again.");
                return;
            }

            // ✅ Send request to backend
            const response = await axios.post(
                "http://localhost:7000/api/add-to-cart",
                {
                    userId,
                    productId: item._id,
                    productName: item.productName,
                    price,
                    quantity: 1,
                    category: item.category,
                    url: item.url
                },
                { headers: { "Content-Type": "application/json" } }
            );

            alert("🎉 Item added to cart successfully!");
            console.log("✅ Item added:", response.data);

            // ✅ Update cart count instantly in Redux
            dispatch(incrementCartCount());

        } catch (error) {
            console.error("❌ Error adding to cart:", error.response?.data || error.message);
            alert("Failed to add item to cart. Please try again later.");
        } finally {
            setLoading(false); // ✅ Stop loading
        }
    };

    return (
        <Button
            size="small"
            color="success"
            disabled={loading} // ✅ Disable button while loading
            onClick={(e) => {
                e.stopPropagation();
                addToCartHandler();
            }}
        >
            {loading ? "Adding..." : "Add to Cart"} {/* ✅ Show loading text */}
        </Button>
    );
}

export default AddToCart;
