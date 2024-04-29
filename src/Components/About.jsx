import React from "react";
import { useLocation } from "react-router-dom";
import "../Style/About.css";

const AboutUs = () => {
  const location = useLocation();

  return (
    <>
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-left">
            <h1> About</h1>

            <p>
              "At the forefront of technological innovation, we specialize in
              revolutionizing healthcare, manufacturing, and business
              intelligence. Our expertise spans from deploying computer vision
              and speech technology-based deep learning models to integrating
              Industry 4.0 standards in manufacturing, and harnessing data
              science for strategic decision-making. With a commitment to
              excellence and sustainability, we deliver tailor-made solutions
              that address the most pressing challenges, ensuring high accuracy,
              efficiency, and actionable insights for businesses and communities
              worldwide."
            </p>
            {/* <p>Our Vision</p> */}
            <h1> Our Vision </h1>
            <p>
              "We envision a world where advanced technology is a catalyst for
              positive change, making healthcare more accessible, manufacturing
              more efficient, and business strategies more data-driven. Our goal
              is to bridge the gap between current challenges and future
              possibilities, transforming industries through innovation and
              intelligence. By pioneering solutions that are sustainable,
              scalable, and impactful, we aim to empower organizations and
              individuals to achieve their highest potential, fostering a future
              where progress and prosperity are within everyone'sreach."
            </p>

            <div className="one"></div>
          </div>

          <div className="about-right">
            <img src="/lrobot.jpeg " alt="About Us Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
