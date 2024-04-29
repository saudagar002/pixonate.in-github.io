import React from "react";
import "../Style/MachineVisionPage.css";

const SupportPage = () => {
  return (
    <div className="support-container">
      <h1>1.Healthcare Applications </h1>
      <div className="support-section">
        <div className="right-side">
          <div className="one"></div>
          <p className="highlighted-p">
            Our technology innovation at Pixonate Labs Private Ltd. meets
            healthcare to transform lives. Our latest project leverages the
            cutting-edge YOLO-NAS model, fine-tuned to perfection, to diagnose
            sickle cell disease with unprecedented accuracy and efficiency.
            Through the power of computer vision, we're not just diagnosing;
            we're revolutionizing the way sickle cell disease is identified,
            making it more accessible and cost-effective for everyone. Our
            technology stands at the forefront of medical diagnostics, offering
            a solution that is both rapid and reliable. The deployment of our
            YOLO-NAS model is set to change the game, providing critical
            diagnostic capabilities to regions and communities that have
            previously struggled with access to affordable healthcare services.
            With our innovative approach, we've achieved remarkable results that
            promise to significantly reduce the time and cost associated with
            sickle cell diagnosis. Our mission is to democratize healthcare,
            ensuring that advanced diagnostic tools are within reach of those
            who need them the most.
          </p>
          <div className="one"></div>
          <p className="highlighted-p">
            {/* <i class="fa-solid fa-arrow-right-from-bracket"></i> */}
            <i className=" hello "> Our Services </i>
          </p>

          <div className="one"></div>
          <p className="highlighted-p">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <i className="text"></i>Sickle Cell Diagnosis
          </p>
          <div className="one"></div>
          <p className="highlighted-p">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <i className="text"></i>Quality Inspection of pathology images
          </p>
        </div>

        <div className="left-side">
          <div className="Dev-2">
            <img src="/Machine2.jpg" alt="about" />
          </div>
          {/* <button> view more </button> */}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;

// fa-solid fa-check
