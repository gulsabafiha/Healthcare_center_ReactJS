import React from "react";
import Doctors from "../Doctors/Doctors";
import Faq from "../Faq/Faq";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <div className="content">
          <h1>
            Proffesional <br />
            Family Health Care
          </h1>
          <p>CREATE YOUR MEDICAL WEBSITE USING JEVELIN</p>
          <img
            src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/23/2018/09/icons2.png"
            alt=""
          />
        </div>
          </div>
          <Services></Services>
          <Doctors></Doctors>
          <Faq></Faq>
    </div>
  );
};

export default Home;
