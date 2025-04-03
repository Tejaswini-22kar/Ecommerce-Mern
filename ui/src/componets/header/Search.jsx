import React, { useState } from "react";
import {
  Box,
  TextField,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  InputAdornment,
  alpha,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
  
    const handleSearchChange = async (e) => {
      const query = e.target.value;
      setSearchTerm(query);
  
      if (query.length > 2) {
        try {
          const response = await axios.get(
            `http://localhost:7000/api/search?search=${query}`
          );
          setSearchResults(response.data);
        } catch (error) {
          console.error("Search error:", error);
        }
      } else {
        setSearchResults([]);
      }
    };
  
    return (
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "auto" },
          flex: { md: 0.5 },
          display: { xs: "block", md: "flex" },
          order: { xs: 2, md: 1 },
          mt: { xs: 1, md: 0 },
          mx: { md: 4 },
        }}
      >
        <TextField
          size="small"
          placeholder="Search products..."
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: alpha("#000", 0.04),
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: alpha("#000", 0.06),
              },
              "&.Mui-focused": {
                backgroundColor: "#fff",
                boxShadow: "0 0 0 2px rgba(0,0,0,0.1)",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "text.secondary" }} />
              </InputAdornment>
            ),
          }}
        />
  
        {/* Search Results Dropdown */}
        {searchResults.length > 0 && (
          <Paper
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              mt: 1,
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              zIndex: 1000,
            }}
          >
            <List>
              {searchResults.map((product) => (
                <ListItemButton
                  key={product._id}
                  onClick={() => navigate(`product?query=${product.productName}`)}
                  sx={{
                    "&:hover": {
                      backgroundColor: alpha("#000", 0.04),
                    },
                  }}
                >
                  <ListItemText
                    primary={product.productName}
                    secondary={`$${product.price?.cost || product.price}`}
                  />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        )}
      </Box>
    );
  };
  

export default Search