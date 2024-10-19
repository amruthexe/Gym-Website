import React from 'react';
import './ScrollingLogos.css';
import logo from "../assets/logo.jpg"
const ScrollingLogos = () => {

  return (
  <>
  <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide mb-16">
        Our logo {" "}
        </h2>
        <div className="flex justify-center items-center my-6">
  <img 
    src={logo} 
    alt="logo" 
    className="border-4 border-orange-600 rounded-lg p-4 shadow-lg"
  />
</div>

      </div>
    <div className="scrolling-logos">
      
    </div>
    </>
  );
};

export default ScrollingLogos;
