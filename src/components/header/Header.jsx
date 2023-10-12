import { useState } from "react";
import "./header.css";
import NavBar from "./NavBar";
import SideBar from "../sidebar/SideBar";

const Header = () => {
  const [show,setShow] = useState(false)
  // const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };

  return (
    <>
      <NavBar setShow={setShow} show={show}/>
      <SideBar setShow={setShow} show={show}/>
    </>
  );
};

export default Header;
