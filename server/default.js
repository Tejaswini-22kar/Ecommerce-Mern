const Product = require('./modal/productModal'); 
const products = require('./consunce/products');

const DefaultData = async () => {
    try {
        const existingProducts = await Product.find(); // Check if data already exists
        if (existingProducts.length === 0) {
            await Product.insertMany(products);
            console.log("Data imported successfully");
        } else {
            console.log("Data already exists. Skipping insertion.");
        }
    } catch (error) {
        console.log("Cannot insert default data:", error.message);
    }
};

module.exports = DefaultData;
