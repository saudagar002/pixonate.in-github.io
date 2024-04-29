import React from 'react';
import '../Style/Stay1.css';

const BannerPage = () => {
  return (
    <div className="container">
      <div className="banner-content">
        <div className="banner-text">
          <h4>Stay Tuned</h4>
          <h1>Get Information & Let's Get in Touch with Our Team</h1>
          <h6>Explore more about our offerings and connect with our team for a seamless and enriching experience.</h6>
        </div>
        <div className="address-container">
          <div className="address">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>Krishna Chowk Radha Raman Society New Sanghavi,<br />Pimpri Chinchwad, Maharashtra 411027</div>
          </div>
          <div className="address">
            <div className="icon email-icon">
              <i className="far fa-envelope"></i>
            </div>
            <div>pixonate.ai@gmail.com</div>
          </div>
          <div className="address">
            <div className="icon phone-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>8275563954 :- 9579290149</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;