const express = require("express");
const mongoose = require("mongoose");
const DefaultData = require("./default");
require("./config");
const router = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const path = require("path");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Static Files
app.use("/assets", express.static(path.join(__dirname, "consunce", "assets")));


// Routes
app.use("/api", router);
app.use("/api/user", userRoutes);

// Start Server
const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Initialize Default Data with Error Handling
DefaultData()
    .then(() => console.log("✅ Default data loaded successfully"))
    .catch(err => console.error("❌ Error loading default data:", err));
