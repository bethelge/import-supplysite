import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'; // Ensure this import is present
import cont from "../../assets/images/cont.avif";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.webp";
import img3 from "../../assets/images/img3.png";

function CustomCarousel() {
  return (
    <div>
      <Carousel interval={3000} controls={false} indicators={true} fade={true}>
        {/* Slides */}
        {[cont, img1, img2, img3].map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 hero__img" src={image} alt={`Slide ${index + 1}`} />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: "30%", // Adjusted for a balanced layout
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                width: "90%",
                color: "white",
                textTransform: "uppercase",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "700",
                letterSpacing: "3px",
                background: "rgba(0, 0, 0, 0.5)", // Dark semi-transparent background
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.3)", // Elegant shadow effect
                animation: "fadeIn 1.5s ease-in-out",
              }}
            >
              <span
                style={{
                   color: "white",
                  display: "block",
                  fontSize: "3.5rem",
                  fontWeight: "800",
                  // background: "linear-gradient(90deg, #0088cc, #00cc99)", // Light Blue to Light Green
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  // textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", // Strong shadow for 3D effect
                  // animation: "glowEffect 2s infinite alternate",
                 
                 
                }}
              >
                Welcome to
              </span>
              <span
                style={{
                  display: "block",
              fontSize: "3.5rem",
                  fontWeight: "800",
                  color: "white",
                 
                  letterSpacing: "5px",
                  marginTop: "5px",
                  animation: "slideIn 1.5s ease-in-out",
                }}
              >
                HAF Import & Supply
              </span>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      
    </div>
  );
}

export default CustomCarousel;
