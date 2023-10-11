import React from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoGooglePlus,
  BiLogoLinkedin,
} from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>My Todo</h1>
      <p
        style={{ textAlign: "center", lineHeight: "1.3rem", padding: "5px 0",maxWidth:"60%" }}
      >
        Are you looking for a simple yet powerful way to stay organized and
        manage your tasks efficiently? Look no further! TodoMaster is here to
        help you stay on top of your to-do list and achieve your goals with
        ease.
      </p>
      <h1>Social Media</h1>
      <div style={{ display: "flex", flexWrap: "wrap" ,padding:"1rem 0 2rem"}}>
        <BiLogoFacebook className="social-icon"/>
        <BiLogoTwitter className="social-icon"/>
        <BiLogoGooglePlus className="social-icon" />
        <TfiYoutube className="social-icon" size={10}/>
        <BiLogoLinkedin className="social-icon"/>
      </div>
    </div>
  );
};

export default Footer;
