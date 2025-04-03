import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Search() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("query") || "";
  
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
        if (searchQuery) {
            fetch(`http://localhost:7000/api/search?search=${searchQuery}`)
                .then((res) => res.json())
                .then((data) => setProducts(data))
                .catch((err) => console.error("Error fetching products:", err));
        }
    }, [searchQuery]);
  
    return (
        <div className="container mt-4">
            <h2>Search Results for: "{searchQuery}"</h2>
            {products.length > 0 ? (
                <ul className="list-group">
                    {products.map((product) => (
                        <li key={product._id} className="list-group-item">
                            {product.productName} - ₹{product.price?.cost || product.price?.mrp}
                        </li>
                    ))}+
                </ul>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
}

export default Search;
