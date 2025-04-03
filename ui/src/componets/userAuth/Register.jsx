import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:7000/api/user/register", user);
            alert(res.data.message);
        } catch (error) {
            console.error("Registration Error:", error.response?.data || error.message); // Logs error
            alert("Error: " + (error.response?.data?.message || "Something went wrong"));
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" placeholder="Name" name ="name" onChange={(e) => setUser({ ...user, name: e.target.value })} required />
            <input type="email" placeholder="Email"  name ="email" onChange={(e) => setUser({ ...user, email: e.target.value })} required />
            <input type="password" placeholder="Password" name ="password" onChange={(e) => setUser({ ...user, password: e.target.value })} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
