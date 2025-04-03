// import axios from "axios";
// import { setCartCount } from "./CartSlice"; // Import Redux action

// export const fetchCartCount = async (dispatch) => {
//   try {
//     const userId = localStorage.getItem("userId"); // Get user ID

//     if (!userId) {
//       console.warn("No userId found. Cart count fetch skipped.");
//       return;
//     }

//     const response = await axios.get(`http://localhost:7000/api/cart-count/${userId}`); // ✅ Ensure correct endpoint
//     dispatch(setCartCount(response.data.count || 0)); // ✅ Prevent undefined Redux state
    
//   } catch (error) {
//     console.error("❌ Error fetching cart count:", error.response?.data || error.message);
//     dispatch(setCartCount(0)); // Reset count on error
//   }
// };
