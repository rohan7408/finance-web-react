import React from "react";
import "./Demo.css";

const Demo = () => {
  return (
    <div className="demo" id="demo">
      <div className="container">
        <div className="col-1">
          <p>Get Rick Roll Now</p>

          <p>More Than 1.3B Got Rick Roll </p>
          <p>
            Never gonna give you up Never gonna let you down Never gonna run
            around and desert you Never gonna make you cry Never gonna say
            goodbye Never gonna tell a lie and hurt you
          </p>
          <a href="https://youtu.be/dQw4w9WgXcQ">
            {" "}
            <button className="button">Rick Roll Now</button>
          </a>
        </div>
        <div className="col-2">
          <iframe
            width="570"
            height="320"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Demo;
