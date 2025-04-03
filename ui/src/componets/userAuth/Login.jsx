import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // For Redux if you need to manage the user state
// import { setCartCount } from "../redux/CartSlice"; // If you want to use Redux for cart count management

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({ email: "", password: "" });

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Logging in with:", user); // Debug: Check what is being sent

        try {
            const res = await axios.post("http://localhost:7000/api/user/login", user, {
                headers: { "Content-Type": "application/json" } // Ensure JSON format
            });

            console.log("Login Response:", res.data); // Debug: Check the response from the server

            if (res.data?.userId && res.data?.token) {
                // Store user details in localStorage
                console.log("Storing user data:", res.data.userId, res.data.token); // Debug data

                localStorage.setItem("userId", res.data.userId);
                localStorage.setItem("token", res.data.token);

                // Optional: Log to confirm it's stored
                console.log("User data stored in localStorage:", localStorage.getItem("userId"), localStorage.getItem("token"));

                alert("Login successful!");
                navigate("/"); // Redirect to homepage after successful login
            } else {
                alert("Unexpected response from server. Please try again.");
            }
        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message); // Debug errors

            if (error.response) {
                alert(error.response.data.message || "Invalid credentials");
            } else {
                alert("Network error. Please check your connection.");
            }
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
                autoComplete="username" // Add autocomplete attribute
            />
            <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
                autoComplete="current-password" // Add autocomplete attribute
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
