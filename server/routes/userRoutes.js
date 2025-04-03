const express = require("express");
const User = require("../modal/userModal/loginModal"); // Correct User model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

// User Registration Route
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({ message: "Server error", error: error.message || error });
    }
});

// User Login Route
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate the input (email and password)
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        // Compare the hashed password with the entered password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // ✅ Generate Token (Ensure SECRET_KEY is stored in env variable)
        const token = jwt.sign(
            { userId: user._id }, 
            process.env.JWT_SECRET_KEY || "your_secret_key",  // Use environment variable for security
            { expiresIn: "7d" } // Token valid for 7 days
        );

        // Send back the token and userId in the response
        res.json({ message: "Login successful", userId: user._id, token });
    } catch (error) {
        console.error("Login error:", error);  // Log the error for debugging
        res.status(500).json({ message: "Login error", error: error.message });
    }
});

module.exports = router; // Export the router
