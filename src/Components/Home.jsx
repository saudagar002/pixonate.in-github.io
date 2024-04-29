import React from "react";
import "../Style/HomePage.css";
import Machine1 from "./Assets/Machine1.jpg";
import Machine2 from "./Assets/Machine2.jpg";
import Machine3 from "./Assets/Machine3.jpg";
import Aabout from "./Aabout";
import MachineVisionPage from "./MachineVisionPage";
import MachineVisionPage2 from "./MachineVisionPage2"; 
 import MachineVisionPage3 from "./MachineVisionPage3"; 

function Carousel() {
  return (
    <>
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src={Machine1}
            className="d-block w-100 carousel-image"
            alt="Machine 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="carousel-title">Healthcare Applications</h1>
            <h5 className="carousel-subtitle">
              Custom Software Development specializing in providing bespoke
              software solutions tailored to your unique needs.
            </h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src={Machine2}
            className="d-block w-100 carousel-image"
            alt="Machine 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="carousel-title">Industry 4.0 Standard</h1>
            <h5 className="carousel-subtitle">
              Custom Software Development specializing in providing bespoke
              software solutions tailored to your unique needs.
            </h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={Machine3}
            className="d-block w-100 carousel-image"
            alt="Machine 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="carousel-title">Data Science</h1>
            <h5 className="carousel-subtitle">
              Custom Software Development specializing in providing bespoke
              software solutions tailored to your unique needs.
            </h5>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <Aabout />
    <MachineVisionPage />
    <MachineVisionPage2 />
    <MachineVisionPage3/>
 
    </>
  );
}

export default Carousel;
