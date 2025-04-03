import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartCount, incrementCartCount } from "../../redux/CartSlice"; // ✅ Import actions
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const dispatch = useDispatch();
    const cartCount = useSelector((state) => state.cart.count) || 0; // ✅ Default to 0 if undefined
    const userId = localStorage.getItem("userId"); // ✅ Get user ID from localStorage

    useEffect(() => {
        if (userId) {
            dispatch(fetchCartCount(userId)); // ✅ Fetch user-specific cart count
        }
    }, [dispatch, userId]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    background: "#fff",
                    color: "#000",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
                }}
            >
                <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
                    <Toolbar disableGutters sx={{ display: "flex", alignItems: "center", py: 2 }}>
                        {/* Left Section: Logo & Mobile Menu Icon */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                sx={{ display: { md: "none" } }}
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h5"
                                component={Link}
                                to="/"
                                sx={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    fontWeight: 600,
                                    letterSpacing: "-0.5px",
                                }}
                            >
                                Electronics Store
                            </Typography>
                        </Box>

                        {/* Center Section: Search Bar (Desktop) */}
                        <Box sx={{ display: { xs: "none", md: "block" }, width: "700px" }}>
                            <Search />
                        </Box>

                        {/* Right Section: Cart & Login */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Button component={Link} to="/cart" sx={{ color: "text.primary" }}>
                                <ShoppingCartIcon />
                                <Box sx={{ ml: 1 }}>Cart: {cartCount}</Box> {/* ✅ Dynamic Cart Count */}
                            </Button>
                            <Button component={Link} to="/login" startIcon={<AccountCircleIcon />} sx={{ color: "text.primary" }}>
                                Login
                            </Button>
                        </Box>
                    </Toolbar>

                    {/* Navigation Section (Desktop) */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                            width: "100%",
                            mt: 2,
                            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                            pt: 1,
                        }}
                    >
                        <Button component={Link} to="/" sx={{ color: "text.primary" }}>
                            Home
                        </Button>
                        <Button component={Link} to="/shop" sx={{ color: "text.primary" }}>
                            Shop
                        </Button>
                        <Button component={Link} to="/contact" sx={{ color: "text.primary" }}>
                            Contact
                        </Button>
                    </Box>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 280,
                        boxSizing: "border-box",
                    },
                }}
            >
                <List sx={{ pt: 2 }}>
                    <ListItem component={Link} to="/" onClick={handleDrawerToggle} sx={{ py: 1.5 }}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem component={Link} to="/shop" onClick={handleDrawerToggle} sx={{ py: 1.5 }}>
                        <ListItemText primary="Shop" />
                    </ListItem>
                    <ListItem component={Link} to="/contact" onClick={handleDrawerToggle} sx={{ py: 1.5 }}>
                        <ListItemText primary="Contact" />
                    </ListItem>
                    <ListItem component={Link} to="/cart" onClick={handleDrawerToggle} sx={{ py: 1.5 }}>
                        <ListItemText primary="Cart" />
                    </ListItem>
                    <ListItem component={Link} to="/login" onClick={handleDrawerToggle} sx={{ py: 1.5 }}>
                        <ListItemText primary="Login" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default Navbar;
