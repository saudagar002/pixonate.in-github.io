import React from 'react';

const MapPage = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.3642237177158!2d73.8155660772057!3d18.58181052066933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8c85844eed1%3A0x4f5f6fab53626cc2!2sKrishna%20Chowk%2C%20Dyanesh%20Park%2C%20New%20Sanghavi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411027!5e0!3m2!1sen!2sin!4v1706683633322!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapPage;
