import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/ProductSlice"; // ✅ Fetch products from Redux
import AddToCart from "../header/AddToCart";
import { Button, Grid, Card, CardContent, Typography, CardMedia, Box, styled } from "@mui/material";

const Row = styled(Box)`
  border-top: 1px solid #ddd;
`;

function Shop() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
      const status = useSelector((state) => state.products.status);
  
console.log("shop products" , products);

    useEffect(() => {
        dispatch(fetchProducts()); // ✅ Fetch products when component mounts
    }, [dispatch]);

    


    return (
        <>
        <div style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        {/* Left Side Banner */}
        <Grid size={3}>
          <Card sx={{ boxShadow: "none", borderRadius: "5px" }}>
            <CardMedia
              component="img"
              image="/assets/offeres_bnner/diwali_offer.jpg"
              alt="Diwali Offer"
              sx={{ height: "100%", objectFit: "cover" }}
            />
          </Card>
        </Grid>

        {/* Right Side Products */}
        <Grid size={9}>
         

          <Row>
            <Grid container spacing={0}>
              {products.length > 0 ? (
                products.map((product , index) => (
                  <Grid size={3} key={product.id || product._id}
                  sx={{
                    marginTop: "20px",
                    boxShadow: "none",
                    borderRadius: "0px",
                    borderLeft:  index % 4 === 0  ? "none" : "1px solid #ddd",// ✅ Fix applied
                    borderRight: "none", 
                    transition: "border 0.3s ease-in-out",
                    
                    "&:hover": {
                      boxShadow: "0px 0px 10px rgb(0 0 0 / 26%)",
                     
                    },
                  }}
                  
                  >
                    <Card  sx={{
                    
                    margin:"17px",
                    boxShadow:"none",
                  }}>
                      <CardContent sx={{ paddingBottom: "0" }}>
                        <Typography variant="body2" color="text.secondary">
                          {product.category}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            component="div"
                            sx={{
                              fontWeight: "bold",
    color: "#007bff",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    width: "150px", // ✅ Ensure a fixed width
    display: "block", // ✅ Ensure it behaves as a block element
                            }}
                          >
                            {product.productName}
                          </Typography>
                        </Box>
                      </CardContent>

                      <CardMedia
                        component="img"
                        height="180"
                        image={product.url ? `http://localhost:7000/assets/${product.url}` : "https://via.placeholder.com/180"}
                        alt={product.productName}
                        sx={{ objectFit: "contain", padding: "10px" }}
                      />

                      <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 16px" }}>
                        <Typography variant="h6" color="text.primary" sx={{ fontWeight: "bold" }}>
                          ₹{product.price.mrp}
                        </Typography>
                        <AddToCart item={product} /> {/* Pass product as a prop */}
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography variant="body1" align="center">
                    No products found.
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Row>
        </Grid>
      </Grid>
    </div>
        </>
    );
}

export default Shop;
