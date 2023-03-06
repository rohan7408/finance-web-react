import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <p>Better Call Saul</p>
        <p>505-842-5662</p>
        <p>Because Money</p>
        <p>Doesn't come with instructions</p>
        <button href="/" className="button">
          Better Call Saul
        </button>
      </div>
    </div>
  );
};

export default Hero;
