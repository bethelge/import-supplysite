import React, { useEffect } from "react";
import styled from "styled-components";
import SliderComp from "./Slider";

// Import images
import Community from "../../assets/images/Lifestraw Community/Community.jpg";
import Community2 from "../../assets/images/Lifestraw Family 2.0/family.jpg";
import Community3 from "../../assets/images/Lifestraw Go bottle/1Lifestraw Go bottle.jpg";
import Community6 from "../../assets/images/Lifestraw MAX/1Lifestraw MAX.jpg";
import Community9 from "../../assets/images/Lifestraw Mission/Lifestraw Mission.jpg";
import Community11 from "../../assets/images/Lifestraw Personal/3Lifestraw Personal.jpg";
import Agricultural1 from "../../assets/images/Agricultural Inputs/Cocopeat.jpg";
import Agricultural2 from "../../assets/images/Agricultural Inputs/Peat-Moss.jpg";
import Agricultural3 from "../../assets/images/Agricultural Inputs/Seedling tray.jpg";
import lab1 from "../../assets/images/Laboratory Furniture and Equipment/fume hood.jpg";
import lab2 from "../../assets/images/Laboratory Furniture and Equipment/Laboratory Island bench.jpg";
import lab4 from "../../assets/images/Laboratory Furniture and Equipment/refrigerators.jpg";
import lab5 from "../../assets/images/Laboratory Furniture and Equipment/stool.jpg";
import industry1 from "../../assets/images/Industrial Machineries/Grain mill Machines.jpg";
import industry2 from "../../assets/images/Industrial Machineries/Ice making machines.jpg";
import industry3 from "../../assets/images/Industrial Machineries/Seed polishing machines.png";
import industry4 from "../../assets/images/Industrial Machineries/Seed processing machines.jpeg";
import industry5 from "../../assets/images/Industrial Machineries/Seed weighting and packing.jpg";
import industry6 from "../../assets/images/Industrial Machineries/Water meters.jpg";
import placeholderImage from "../../assets/images/Industrial Machineries/Water meters.jpg";

// Define product data with proper descriptions
const waterPurification = [
  {
    image: Community,
    title: "Community Water Filter",
    description: "Provides clean water for large groups (up to 100 people). Removes 99.9999% of bacteria and parasites.",
  },
  {
    image: Community2,
    title: "Family Water Purifier",
    description: "Compact system perfect for households. Filters up to 18,000 liters (4-5 year supply for family).",
  },
  {
    image: Community3,
    title: "Lifestraw Go Bottle",
    description: "Portable water filtration bottle with 2-stage filtration. Perfect for travel and outdoor activities.",
  },
  {
    image: Community6,
    title: "Lifestraw Max",
    description: "Advanced filtration removes bacteria, parasites, microplastics, and reduces heavy metals.",
  },
  {
    image: Community9,
    title: "Lifestraw Mission",
    description: "High-volume purifier for emergency response. Filters up to 100,000 liters of water.",
  },
  {
    image: Community11,
    title: "Personal Water Filter",
    description: "Ultralight personal straw filter. Perfect for hiking, camping, and emergency kits.",
  },
];

const agriculturalInputs = [
  {
    image: Agricultural1,
    title: "Cocopeat",
    description: "100% organic coconut coir growing medium. Excellent water retention and aeration.",
  },
  {
    image: Agricultural2,
    title: "Peat Moss",
    description: "Premium sphagnum peat moss for soil conditioning and moisture control.",
  },
  {
    image: Agricultural3,
    title: "Seedling Trays",
    description: "Durable plastic seedling trays with 128 cells. Perfect for nursery propagation.",
  },
];

const labFurniture = [
  {
    image: lab1,
    title: "Fume Hood",
    description: "Chemical-resistant fume hood with adjustable sash. 1200mm width with built-in ventilation.",
  },
  {
    image: lab2,
    title: "Island Bench",
    description: "Central laboratory workbench with chemical-resistant epoxy resin top. 2400mm length.",
  },
  {
    image: lab4,
    title: "Laboratory Refrigerator",
    description: "Medical-grade fridge with temperature monitoring. Ideal for sensitive samples.",
  },
  {
    image: lab5,
    title: "Lab Stools",
    description: "Adjustable height laboratory stools with backrest. 500lb weight capacity.",
  },
];

const industrialMachinery = [
  {
    image: industry1,
    title: "Grain Mill Machine",
    description: "Industrial grain milling equipment with 500kg/hr capacity. Stainless steel construction.",
  },
  {
    image: industry2,
    title: "Ice Making Machine",
    description: "Commercial ice maker producing 100kg/day. Energy efficient operation.",
  },
  {
    image: industry3,
    title: "Seed Polisher",
    description: "Automatic seed polishing machine with 200kg/hr processing capacity.",
  },
  {
    image: industry4,
    title: "Seed Processing Line",
    description: "Complete seed cleaning, grading and treatment system. Custom configurations available.",
  },
  {
    image: industry5,
    title: "Weighing & Packing",
    description: "Automated weighing and packaging system for seeds and grains. 50 bags/hour capacity.",
  },
  {
    image: industry6,
    title: "Water Meters",
    description: "Industrial water flow meters with digital display. Various pipe sizes available.",
  },
];

const renovation = [
  {
    image: placeholderImage,
    title: "Lab Renovation Services",
    description: "Complete laboratory design and renovation services. Contact us for a custom quote.",
  }
];

function Products() {
  useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.category-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <StyledContainer>
      <HeroSection>
        <h1>
          <span className="green">Premium Import & Supply Solutions</span>
        </h1>
        <p className="subtitle">Quality products for every industrial and commercial need</p>
      </HeroSection>

      <Category className="category-section">
        <CategoryHeader>
          <h2>
            Water Purification <span className="green">Products</span>
          </h2>
          <p className="category-description">
            Advanced solutions for clean and safe water in any environment
          </p>
        </CategoryHeader>
        <SliderWrapper>
          <SliderComp products={waterPurification} />
        </SliderWrapper>
      </Category>

      <Category className="category-section">
        <CategoryHeader>
          <h2>
            Agricultural <span className="green">Inputs</span>
          </h2>
          <p className="category-description">
            High-quality growing media and supplies for modern agriculture
          </p>
        </CategoryHeader>
        <SliderWrapper>
          <SliderComp products={agriculturalInputs} />
        </SliderWrapper>
      </Category>

      <Category className="category-section">
        <CategoryHeader>
          <h2>
            Laboratory <span className="green">Furniture & Equipment</span>
          </h2>
          <p className="category-description">
            Durable and reliable lab solutions for research and testing facilities
          </p>
        </CategoryHeader>
        <SliderWrapper>
          <SliderComp products={labFurniture} />
        </SliderWrapper>
      </Category>

      <Category className="category-section">
        <CategoryHeader>
          <h2>
            Industrial <span className="green">Machinery</span>
          </h2>
          <p className="category-description">
            Heavy-duty equipment for processing and manufacturing
          </p>
        </CategoryHeader>
        <SliderWrapper>
          <SliderComp products={industrialMachinery} />
        </SliderWrapper>
      </Category>

      <Category className="category-section">
        <CategoryHeader>
          <h2>
            Laboratory <span className="green">Renovation Services</span>
          </h2>
          <p className="category-description">
            Custom design and installation for your specialized lab needs
          </p>
        </CategoryHeader>
        <SliderWrapper>
          <SliderComp products={renovation} />
        </SliderWrapper>
      </Category>
    </StyledContainer>
  );
}

export default Products;

// Styled Components
const StyledContainer = styled.div`
  width: 95%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 50px;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 60px 0 40px;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
    color: #333;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 3px;
      background: #007bff;
    }

    .green {
      color: #29B359;
    }
  }

  .subtitle {
    font-size: 1.2rem;
    color: #555;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const Category = styled.section`
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CategoryHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    position: relative;
    display: inline-block;
    color: #333;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, transparent, #007bff, transparent);
    }

    .green {
      color: #29B359;
    }
  }

  .category-description {
    color: #666;
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
  }
`;

const SliderWrapper = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  position: relative;
`;