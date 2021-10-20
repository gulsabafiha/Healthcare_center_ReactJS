import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <h3
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "rgb(0,225,177)",
        }}
      >
        About Jevelin Clinic
      </h3>
      <hr
        className="mx-auto"
        style={{ color: "rgb(0,225,177)", width: "80%", height: "2px" }}
      />
      <br />
      <br />
      <div className="about-container">
        <div style={{ padding: "2rem" }}>
          <h2>Best solutions for your problems.</h2>
          <p>
            For over a decade, ZoomInfo has helped companies achieve their most
            important objective: profitable growth. Backed by the world's most
            comprehensive B2B database, our platform puts sales and marketing
            professionals in position to identify, connect, and engage with
            qualified prospects.
          </p>
        </div>
        <div>
          <img
            src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/23/2018/09/Layer-1200.png"
            alt=""
          />
        </div>
      </div>
        </div>
    );
};

export default About;