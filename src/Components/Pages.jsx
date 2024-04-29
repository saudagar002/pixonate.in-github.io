// Import necessary components and styles
import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Client1 from "./Client1";
import Leavepage from "./Leavepage";
import Map from "./Map";
import Stay from "./Stay";
import Stay1 from "./Stay1"

import "../Style/Pages.css";

// Define the Blog component
const Blog = () => {
  const isBlogPage = window.location.pathname === "/pages"; 

  return (
    <>
      {isBlogPage && (
        <>
          
          <Leavepage />
           <Stay1/>
          <Map />
        </>
      )}
    </>
  );
};

export default Blog;
