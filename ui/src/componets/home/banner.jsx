import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import bannerdata from "../../consunce/banner";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

// Animation Variants
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
};

function Banner({ deviceType }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Box
      sx={{
        height: "500px",
        width: "100%",
        backgroundImage: "url('/assets/slider/Background-slider-homepage_01.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        infinite
        autoPlay={false}
        autoPlaySpeed={4000}
        keyBoardControl
        transitionDuration={1000}
        customTransition="opacity 1s ease-in-out"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        beforeChange={(nextSlide) => setCurrentSlide(nextSlide)}
      >
        {bannerdata.map((e, index) => (
          <Box
            key={index}
            sx={{
              height: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              padding: "0 5%",
            }}
          >
            {/* Dark Overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
              }}
            />

            {/* Banner Content */}
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: "1200px",
                position: "relative",
                zIndex: 2,
              }}
            >
              {/* Left Section: Text */}
              <Box sx={{ maxWidth: "50%", color: "#FFF" }}>
                <motion.div initial="hidden" animate="visible" variants={textVariant}>
                  <Typography sx={{ fontSize: "14px", color: "#00AEEF", fontWeight: "bold", mb: 1 }}>
                    {e.subText}
                  </Typography>
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={textVariant}>
                  <Typography sx={{ fontSize: "32px", fontWeight: "bold", mb: 1 }}>
                    {e.heading}
                  </Typography>
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={textVariant}>
                  <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: "#FFF" }}>
                    {e.discount}
                  </Typography>
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={buttonVariant}>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      backgroundColor: "#FFC107",
                      color: "#000",
                      padding: "10px 20px",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#E0A800" },
                    }}
                  >
                    {e.buttonText}
                  </Button>
                </motion.div>
              </Box>

              {/* Right Section: Image (Fixed at Bottom) */}
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end", // Ensures image sticks at the bottom
                  position: "relative",
                  height: "100%", // Ensures full height for alignment
                }}
              >
                <motion.img
                  src={e.sideImage}
                  alt="Side Banner"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    objectFit: "contain",
                    right: "0", // Aligns image to the right
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </Box>
            </Container>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default Banner;
