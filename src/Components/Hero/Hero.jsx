import React from "react";
import "./Hero.css";
import Navbar from "../../Components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faNetworkWired,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons"; // Import the handshake icon

// Import Swiper and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// Import partner logos
import Partner1 from "../../assets/images/partnerWithUs/Ministry.png";
import Partner2 from "../../assets/images/partnerWithUs/Addis.png";
import Partner3 from "../../assets/images/partnerWithUs/agricultural.jpg";
import Partner4 from "../../assets/images/partnerWithUs/AwashBank.jpg";
import Partner5 from "../../assets/images/partnerWithUs/Ecsu.png";
import Partner6 from "../../assets/images/partnerWithUs/GIZ.jpg";
import Partner7 from "../../assets/images/partnerWithUs/mercy.jpg";
import Partner8 from "../../assets/images/partnerWithUs/samera.jpg";
import Partner9 from "../../assets/images/partnerWithUs/SNV.jpg";
import Partner10 from "../../assets/images/partnerWithUs/water.jpg";

// Initialize SwiperCore with modules
SwiperCore.use([Pagination, Autoplay]);

const partners = [
  { image: Partner1, name: "Partner One" },
  { image: Partner2, name: "Partner Two" },
  { image: Partner3, name: "Partner Three" },
  { image: Partner4, name: "Partner Four" },
  { image: Partner5, name: "Partner Five" },
  { image: Partner6, name: "Partner Six" },
  { image: Partner7, name: "Partner Seven" },
  { image: Partner8, name: "Partner Eight" },
  { image: Partner9, name: "Partner Nine" },
  { image: Partner10, name: "Partner Ten" },
];

const Hero = () => {
  return (
    <div>
      <main>
        <section className="welcome">
          <h1>Welcome to HAF Import & Supply</h1>
          <p>
            Your trusted gateway to global trade and seamless import solutions.
            At HAF, we connect businesses with international markets, ensuring
            smooth and efficient supply chain operations. Whether you're looking
            for premium products, reliable logistics, or expert trade
            assistance, we’ve got you covered.
          </p>
          <p>
            Explore, partner, and grow with us. Together, we build stronger
            trade networks for a better tomorrow.
          </p>
        </section>

        {/* Services Section */}
        {/* <section className="services">
          <div className="service-card">
            <FontAwesomeIcon icon={faShippingFast} />
            <h3>Import Services</h3>
            <p>Efficient and reliable import services tailored to your needs.</p>
          </div>
          <div className="service-card">
            <FontAwesomeIcon icon={faNetworkWired} />
            <h3>Supply Chain</h3>
            <p>Comprehensive supply chain solutions for seamless operations.</p>
          </div>
          <div className="service-card">
            <FontAwesomeIcon icon={faGlobe} />
            <h3>Global Reach</h3>
            <p>Connecting your business to markets around the world.</p>
          </div>
        </section> */}

        {/* News & Media Coverage Section */}
        <section className="news">
          <h2>News & Media Coverage</h2>
          <div className="news-item">
            <h3>Latest Industry Trends</h3>
            <p>
              Stay updated with the latest news in import and supply. We bring
              you industry insights and new developments.
            </p>
          </div>
          <div className="news-item">
            <h3>Upcoming Events</h3>
            <p>
              Join us in our upcoming global business events. Stay tuned for
              more details on our next big event.
            </p>
          </div>
        </section>
        {/* Partner With Us Section */}
        <section className="partners">
          <h2>
            <FontAwesomeIcon icon={faHandshake} />
            Partner with Us
          </h2>
          <Swiper
            spaceBetween={5} // Reduced gap between slides
            slidesPerView={5} // Show 4 slides at a time
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-slide every 2s
            breakpoints={{
              640: {
                slidesPerView: 2, // 2 partners on small screens
              },
              768: {
                slidesPerView: 3, // 3 partners on medium screens
              },
              1024: {
                slidesPerView: 4, // 4 partners on large screens
              },
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="partner-img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>

   
      
    </div>
  );
};

export default Hero;
