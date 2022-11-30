import React from "react";
import logo from "../images/logo/logo1.jpg";
import "./nav.css";

export const NavPannel = () => {
  let viewElement = (value) => {
    try {
      let el = document.getElementById(value);
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="NavPannel">
      <div className="logDiv">
        <img src={logo} alt="logo" className="logoIMG" />
        <span>The ICONIC.co</span>
      </div>
      <div
        className="homeNav"
        onClick={(e) => {
          viewElement("HOME");
        }}
      >
        HOME
      </div>
      <div
        className="aboutNav"
        onClick={(e) => {
          viewElement("About");
        }}
      >
        ABOUT
      </div>
      <div
        className="apartmentNav"
        onClick={(e) => {
          viewElement("APARTMENTS");
        }}
      >
        APARTMENTS
      </div>
      <div
        className="contactNav"
        onClick={(e) => {
          viewElement("Footer");
        }}
      >
        CONTACT US
      </div>
    </div>
  );
};
