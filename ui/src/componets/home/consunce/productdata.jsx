const products = [
    {
        productName: "Nike Running Shoes",
        url: "https://example.com/shoe.jpg",
        detailUrl: "https://example.com/shoe-detail.jpg",
        title: {
            shortTitle: "Running Shoes",
            longTitle: "Nike Air Max Lightweight Running Shoes"
        },
        price: { mrp: 5000, cost: 3999, discount: "20%" },
        quantity: 20,
        description: "High-quality running shoes with breathable material.",
        discount: "Extra ₹100 Off",
        tagline: "Best Seller",
        category: "shoes",
        isFeatured: true,
        isOnSale: false,
        isOffer: true
    },
    {
        productName: "Apple iPhone 15",
        url: "https://example.com/iphone.jpg",
        detailUrl: "https://example.com/iphone-detail.jpg",
        title: {
            shortTitle: "Smartphone",
            longTitle: "Apple iPhone 15 Pro (128GB, Space Black)"
        },
        price: { mrp: 120000, cost: 109999, discount: "10%" },
        quantity: 15,
        description: "Experience the power of the A17 Bionic chip.",
        discount: "Festival Offer",
        tagline: "Trending",
        category: "electronics",
        isFeatured: true,
        isOnSale: true,
        isOffer: false
    },
    {
        productName: "Samsung LED TV",
        url: "https://example.com/tv.jpg",
        detailUrl: "https://example.com/tv-detail.jpg",
        title: {
            shortTitle: "Television",
            longTitle: "Samsung 50-inch 4K Ultra HD Smart LED TV"
        },
        price: { mrp: 60000, cost: 49999, discount: "17%" },
        quantity: 10,
        description: "Enjoy cinematic experience with vibrant colors and HDR support.",
        discount: "Limited Period Offer",
        tagline: "Best Seller",
        category: "electronics",
        isFeatured: false,
        isOnSale: true,
        isOffer: true
    },
    {
        productName: "Sony Wireless Headphones",
        url: "https://example.com/headphones.jpg",
        detailUrl: "https://example.com/headphones-detail.jpg",
        title: {
            shortTitle: "Headphones",
            longTitle: "Sony WH-1000XM4 Noise Cancelling Headphones"
        },
        price: { mrp: 25000, cost: 19999, discount: "20%" },
        quantity: 12,
        description: "Industry-leading noise cancellation with superior sound quality.",
        discount: "Extra ₹1000 Off",
        tagline: "Top Rated",
        category: "electronics",
        isFeatured: true,
        isOnSale: false,
        isOffer: true
    },
    {
        productName: "Adidas Sports T-Shirt",
        url: "https://example.com/tshirt.jpg",
        detailUrl: "https://example.com/tshirt-detail.jpg",
        title: {
            shortTitle: "T-Shirt",
            longTitle: "Adidas Men's Sports Dry-Fit T-Shirt"
        },
        price: { mrp: 1500, cost: 999, discount: "33%" },
        quantity: 30,
        description: "Comfortable and stylish dry-fit T-shirt for workouts.",
        discount: "Flat ₹500 Off",
        tagline: "Limited Stock",
        category: "clothing",
        isFeatured: false,
        isOnSale: true,
        isOffer: false
    },
    {
        productName: "Fossil Smartwatch",
        url: "https://example.com/watch.jpg",
        detailUrl: "https://example.com/watch-detail.jpg",
        title: {
            shortTitle: "Smartwatch",
            longTitle: "Fossil Gen 6 Smartwatch with Alexa Built-in"
        },
        price: { mrp: 22000, cost: 18999, discount: "14%" },
        quantity: 8,
        description: "Track fitness, receive notifications, and stay connected.",
        discount: "Big Billion Day Offer",
        tagline: "Trending",
        category: "accessories",
        isFeatured: true,
        isOnSale: true,
        isOffer: false
    },
    {
        productName: "HP Pavilion Gaming Laptop",
        url: "https://example.com/laptop.jpg",
        detailUrl: "https://example.com/laptop-detail.jpg",
        title: {
            shortTitle: "Laptop",
            longTitle: "HP Pavilion Gaming Laptop (Ryzen 5, 16GB RAM, 512GB SSD)"
        },
        price: { mrp: 85000, cost: 74999, discount: "12%" },
        quantity: 5,
        description: "High-performance gaming laptop with NVIDIA GTX graphics.",
        discount: "₹10,000 Off Today",
        tagline: "Best Gaming Laptop",
        category: "electronics",
        isFeatured: false,
        isOnSale: true,
        isOffer: true
    },
    {
        productName: "Bose Soundbar 700",
        url: "https://example.com/soundbar.jpg",
        detailUrl: "https://example.com/soundbar-detail.jpg",
        title: {
            shortTitle: "Soundbar",
            longTitle: "Bose 700 Smart Soundbar with Alexa Voice Control"
        },
        price: { mrp: 80000, cost: 69999, discount: "13%" },
        quantity: 4,
        description: "Immersive audio experience with smart voice commands.",
        discount: "Extra ₹5,000 Off",
        tagline: "Best Sound Experience",
        category: "electronics",
        isFeatured: true,
        isOnSale: false,
        isOffer: false
    },
    {
        productName: "KitchenAid Mixer Grinder",
        url: "https://example.com/mixer.jpg",
        detailUrl: "https://example.com/mixer-detail.jpg",
        title: {
            shortTitle: "Kitchen Appliances",
            longTitle: "KitchenAid 750W Mixer Grinder with 3 Jars"
        },
        price: { mrp: 12000, cost: 9999, discount: "16%" },
        quantity: 6,
        description: "Powerful mixer grinder for smooth blending and grinding.",
        discount: "Extra ₹500 Off",
        tagline: "Top Rated",
        category: "home_appliances",
        isFeatured: false,
        isOnSale: true,
        isOffer: true
    },
    {
        productName: "Casio Digital Piano",
        url: "https://example.com/piano.jpg",
        detailUrl: "https://example.com/piano-detail.jpg",
        title: {
            shortTitle: "Musical Instruments",
            longTitle: "Casio CTX700 Digital Keyboard with 61 Keys"
        },
        price: { mrp: 22000, cost: 18999, discount: "14%" },
        quantity: 7,
        description: "Professional-quality sound and built-in learning modes.",
        discount: "Festival Discount",
        tagline: "Best Seller",
        category: "music",
        isFeatured: true,
        isOnSale: true,
        isOffer: false
    }
  ];
  
  module.exports = products;
  