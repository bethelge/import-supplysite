import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Navbar from './Components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import CustomCarousel from "./Components/Carousel/CustomCarousel";
import ServicesProducts from "./Components/Services/services";
import ProductCard from "./Components/Products/Products";
import ContactUs from "./Components/Contact/Contact";
import ImagePage from "./Components/ImagePage/ImagePage";
import TestimonialsPage from "./Components/Testimony/Testimonials.jsx";

// Import Testimonials component
import Testimonials from './Components/Testimony/Testimonials';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<><Navbar /><CustomCarousel /><Hero /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<><Navbar /><ServicesProducts /></>} />
        <Route path="/products" element={<><Navbar /><ProductCard /></>} />
        
        {/* Directly render Testimonials without PageLayout */}
        <Route path="/testimonials" element={<><Navbar /><Testimonials /></>} />

        <Route path="/contact" element={<><Navbar /><ContactUs /></>} />
        <Route path="/image/:imageName" element={<ImagePage />} />
      </Routes>

      {/* Footer outside the Routes component */}
      <footer>
        <div className="footer-container">
          <p>© 2023 HAF Import & Supply. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
