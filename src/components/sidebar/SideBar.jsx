import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdPendingActions } from "react-icons/md";
import "./sidebar.css";

const sideBarMenu = [
  {
    title: "Todo List",
    icon: <FaTasks />,
  },
  {
    title: "Completed Task",
    icon: <FiCheckCircle />,
  },
  {
    title: "Pending Task",
    icon: <MdPendingActions />,
  },
];

const SideBar = ({ show }) => {
  const [activeIndex] = useState(0);
  return (
    <div className={show ? "sidebarContainer active" : "sidebarContainer"}>
    
      <ul className="menuContainer">
        {sideBarMenu.map((item, index) => (
          <li
            key={index}
            style={{ background: activeIndex == index && "#5767aa" }}
          >
            {item.icon}
            <p
              style={{
                marginLeft: "0.5rem",
                fontFamily: "'Gabarito', sans-serif",
                fontWeight: 400,
              }}
            >
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
