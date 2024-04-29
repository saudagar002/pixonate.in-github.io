// SupportPage.jsx

import React from "react";
import "../Style/Machine3.css";

const SupportPage = () => {
  return (
    <div className="support-container-2">
      <h1>3.Data Science </h1>
      <div className="support-section">
        <div className="right-side">
          <div className="one"></div>
          <p className="highlighted-p">
            {/* <i className="fa-solid fa-check"></i> */}" Alongside
            transforming manufacturing with Industry 4.0 innovations, Pixonate
            lab is pioneering in the field of data science and data analysis.
            Our project on capacity planning for the pharmaceutical industry
            showcases our expertise in optimizing resource equipment and
            material flow. By analyzing vast datasets, we enable precise
            planning and efficiency improvements, ensuring optimal production
            levels and resource utilization. This approach not only enhances
            operational efficiency but also drives innovation in pharmaceutical
            manufacturing, demonstrating our commitment to leveraging data for
            strategic advancements."
          </p>
          <div className="one"></div>
          <p className="highlighted-p">
            {/* <i class="fa-solid fa-arrow-right-from-bracket"></i> */}
            <i className=" hello "> Our Services </i>
          </p>
          <div className="one"></div>
          <p className="highlighted-p">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <i className=""></i>Audit analysis
          </p>
          <div className="one"></div>
          <p className="highlighted-p">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <i className=""></i>Fraud Risk analysis
          </p>
          {/* <div className="one"></div>
          <p className="highlighted-p">
            <i className="fa-solid fa-check"></i>"Diamension Inspection"
          </p> */}
          {/* <div className="one"></div>
          <p className="highlighted-p">
            <i className="fa-solid fa-check"></i>"Diamension Inspection"
          </p> */}
        </div>
        <div className="left-side">
          <div className="Dev-2">
            {/* <img src="/public/Machine1.jpg" alt="Support Image" className="support-image" /> */}
            <img src="/Machine3.jpg" alt="about" />
          </div>
          {/* <button> view more </button> */}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
