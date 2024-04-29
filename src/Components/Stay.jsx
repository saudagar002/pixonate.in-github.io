// StayTuned.js
import React from "react";
import "../Style/Stay.css";

const StayTuned = () => {
  return (
    <div className="stay-tuned-container">
      <p className="stay-tuned-text">Stay Tuned</p>
      <h1 className="get-info">Get Information & Let's Get in Touch with Our Team</h1>
      <p className="explore-text">
        Explore more about our offerings and connect with our team for a
        seamless and enriching experience.
      </p>
      <div className="contact-info">
        <div className="info-item">
          <i className="fas fa-map-marker-alt"> Krishna Chowk Radha Naman Society New Sanghavi,<br></br>
          Pimpri Chinchwad,Maharashatra 411027
          </i>
           {/* <p className="address">Krishna Chowk Radha Naman Society New Sanghavi,<br></br>
          Pimpri Chinchwad,Maharashatra 411027</p>  */}
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"> pixonate.ai@gmail.com </i>
           {/* <p className="email">pixonate.ai@gmail.com</p>   */}
        </div>
        <div className="info-item">
          <i className="fas fa-phone-alt">8275563954:-9579290149 </i>
          {/* <p className="phone">8275563954:-9579290149</p>  */}
           {/* <p className="phone">9579290149</p>  */}
        </div>
      </div>
    </div>
  );
};

export default StayTuned;
