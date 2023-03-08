import React from "react";
import john from "./images/john-doe.png";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={john} alt="john" />
        <div className="col-2">
          <h2>About </h2>
          <span className="line"></span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            facilis quas hic, rerum esse sunt?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            vitae maxime corrupti harum, nemo neque totam expedita odio
          </p>
          <a href="https://youtu.be/dQw4w9WgXcQ">
            <button className="button">Explore More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
