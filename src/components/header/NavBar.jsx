import React from "react";
import { FaBars } from "react-icons/fa";

const NavBar = ({ setShow,show }) => {
  return (
    <header>
        <div
        style={{
          display: "flex",
          alignItems: "center",
          
        }}
      >
        <img
          src="./todo.png"
          alt="/"
          style={{ objectFit: "contain", width: "2rem", marginRight: "0.5rem" }}
        />

        <h2 style={{ fontFamily: "'Jost', sans-serif" }}>My TODO</h2>
      </div>
      {/* <nav ref={navRef}>
      <a href="/#">Home</a>
      <a href="/#">My work</a>
      <a href="/#">Blog</a>
      <a href="/#">About me</a>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />
      </button>
    </nav> */}
      <button className="nav-btn" onClick={() => setShow(!show)}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavBar;
