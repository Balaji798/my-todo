import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "#fff", fontWeight: "bold",fontSize:"20px" }}
      >
        My Todo
      </Link>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">My work</a>
        <a href="/#">Blog</a>
        <a href="/#">About me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
