import React from "react";
import user1 from "./images/user1.jpeg";
import user2 from "./images/user2.jpeg";
import user3 from "./images/user3.jpeg";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={user1} alt="user1" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, nam! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Praesentium, nam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium, nam!
            </p>
            <p>
              <span>Bandicom Suktas</span>
            </p>
            <p>Director of "Financial Times"</p>
          </div>
          <div className="card">
            <img src={user2} alt="user2" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, nam! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Praesentium, nam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium, nam!
            </p>
            <p>
              <span>Fulvas Suktas</span>
            </p>
            <p>Manager of "Financial Times"</p>
          </div>
          <div className="card">
            <img src={user3} alt="user3" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, nam! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Praesentium, nam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium, nam!
            </p>
            <p>
              <span>Saurya Suktas</span>
            </p>
            <p>Staff of "Financial Times"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
