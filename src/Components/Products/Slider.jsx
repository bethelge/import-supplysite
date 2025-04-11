import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import styled from "styled-components";

// Custom Arrow Components
const CustomPrevArrow = (props) => (
  <Arrow style={{ left: "-40px" }} onClick={props.onClick}>
    ◀
  </Arrow>
);

const CustomNextArrow = (props) => (
  <Arrow style={{ right: "-40px" }} onClick={props.onClick}>
    ▶
  </Arrow>
);

const SliderComp = ({ products }) => {
  const slidesToShow = products.length < 3 ? products.length : 3;

  const settings = {
    dots: true,
    infinite: products.length > slidesToShow,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: products.length > 3,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "ease-in-out",
    arrows: products.length > 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(products.length, 3), slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: Math.min(products.length, 2), slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: Math.min(products.length, 1), slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {products.map((product, index) => (
          <Slide key={index}>
            <ProductCard 
              image={product.image} 
              title={product.title} 
              description={product.description}
            />
          </Slide>
        ))}
      </Slider>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  width: 100%;
  margin: auto;

  .slick-track {
    display: flex;
    gap: 15px;
  }
`;

const Slide = styled.div`
  padding: 0 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 24px;
  color: #007bff;
  z-index: 2;

  &:hover {
    color: #0056b3;
  }
`;

// Make sure this default export exists
export default SliderComp;