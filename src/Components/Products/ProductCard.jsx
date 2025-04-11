import React from 'react';
import './ProductCard.css'; // Import the CSS file
import styled from "styled-components";
import { Link } from 'react-router-dom';

function ProductCard({ image, exploreImage, title, description, isNew }) {
  const exploreImageName = exploreImage ? exploreImage.split('/').pop() : '';

  return (
    <Container className="product-card gradient-border">
      {isNew && (
        <div className="ribbon">
          <span className="ribbon-content">New Arrival</span>
        </div>
      )}
      <ImageWrapper>
        <img src={image} alt={title} />
      </ImageWrapper>
      <Description>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="button-group">
          <Link to={`/image/${exploreImageName}`} className="explore-link">
            Explore
          </Link>
          {/* <button className="inquiry-btn">Inquire Now</button> */}
        </div>
      </Description>
    </Container>
  );
}

export default ProductCard;


const Container = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin-bottom: 30px;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px; /* Fixed height */
  overflow: hidden;
  border-radius: 5px 5px 0 0;
  position: relative;
  display: flex;
  align-items: center; /* Vertical center */
  justify-content: center; /* Horizontal center */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Changed from 'cover' to 'contain' */
    transition: all 0.5s ease;
  }

  ${Container}:hover & img {
    transform: scale(1.05);
  }
`;
const Description = styled.div`
  padding: 20px;
  background: #f8f8f8;
  border-radius: 0 0 5px 5px;
  transition: all 0.3s ease-in-out;

  ${Container}:hover & {
    background: #ececec;
  }

  h2 {
    margin: 0 0 10px;
    font-size: 1.5rem;
    color: #333;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 2px;
      background: #007bff;
    }
  }

  p {
    font-size: 1rem;
    color: #555;
    margin: 15px 0;
    line-height: 1.5;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }

  .explore-link {
    display: inline-block;
    padding: 8px 15px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s ease;
    border: 1px solid #007bff;

    &:hover {
      background: transparent;
      color: #007bff;
    }
  }

  .inquiry-btn {
    padding: 8px 15px;
    background: transparent;
    color: #007bff;
    border: 1px solid #007bff;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #007bff;
      color: white;
    }
  }
`;