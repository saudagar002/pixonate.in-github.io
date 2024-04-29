// DetailServerPage.js
import React from "react";
import "../Style/DetailServer.css"

const DetailServerPage = () => {
  return (
    <div className="container">
      <div className="big-image">
        
        <img src="Banner-1.jpg" alt="Big Image" />
      </div>
      <div className="text-div">
        <h1>We are a Detail Server of the Software</h1>
        <p>
          We provide detailed information about the software, including user interface functionality. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
        <div className=" about1-left">
            <img src="Banner-1.jpg" alt="" className="" />
        </div>
      </div>
      <div className="left-div">
        <div className="row">
          <div className="left-box">
            <h2>UI/UX Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="right-box">
            <h2>Development Process</h2>
            <p>Jshfiuv skfhvikdsfb ikshfigvn oalsa;pka;whrigh</p>
          </div>
        </div>
        <div className="row">
          <div className="left-box">
            {/* Add your image path */}
            <img src="Banner-2.jpg" alt="Left Image" />
          </div>
          <div className="right-box">
            {/* Add your image path */}
            <img src="Banner-3.jpg" alt="Right Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailServerPage;
