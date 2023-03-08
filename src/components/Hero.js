import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="content">
        <p>Better Call Saul</p>
        <p>505-842-5662</p>
        <p>Because Money</p>
        <p>Doesn't come with instructions</p>
        <a href="https://youtu.be/dQw4w9WgXcQ">
          <button className="button">Better Call Saul</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
