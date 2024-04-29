import React from "react";
import "../Style/Machine2.css";

const SupportPage = () => {
  return (
    <div className="support-container">
      <div className="support-header">
        <h1> 2.Industry 4.0 Standards</h1>
      </div>
      <div className="support-section">
        <div className="left-side">
          <div className="Dev-2">
            <img src="/Machine1.jpg" alt="about" />
          </div>
        </div>
        <div className="right-side">
          <div className="one"></div>
          <p className="highlighted-p">
            "We are at the forefront of transforming manufacturing technology to
            meet Industry 4.0 standards. Our innovative application for
            character counts on bearings exemplifies our commitment to precision
            and efficiency. We are expanding our technological portfolio to
            include sealant width measurement, advanced character recognition,
            and surface identification on bearings, aiming to revolutionize
            quality control processes in manufacturing. As we continue to
            explore and develop new applications, our goal is to lead the way in
            smart manufacturing solutions, making operations more sustainable,
            efficient, and cost-effective."
          </p>
          <div className="one"></div>
          <p className="highlighted-p">
            <i className="hello"> Our Services </i>
          </p>
          <div className="service-items">
            <div className="service-item">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <p>OCR on Bearing/Tyre</p>
            </div>

            <div className="service-item">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <p>Plastic/Chassis</p>
            </div>

            <div className="service-item">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <p>Character Count</p>
            </div>
            <div className="service-item">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <p>Defect Detection</p>
            </div>
            <div className="service-item">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <p>Missing component in assembly line</p>
            </div>
            <div className="service-item">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <p>QR Barcode Scanner of multiple boxes in single photo</p>
            </div>
            <div className="service-item">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <p>Vehicle Number Plate detection</p>
            </div>
            <div className="service-item">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <p>Shape Detection in Manufacturing industry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
