import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {ImCross} from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";

const NavBar = ({ setShow, show }) => {
  const { todoData } = useSelector((state) => state.todoList);
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef();
  const [isHovered, setIsHover] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <header>
      <div className="nav">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button className="nav-btn" onClick={() => setShow(!show)}>
            {show ? <ImCross size={20}/> : <FaBars />}
          </button>
          <img
            src="./todo.png"
            alt="/"
            style={{
              objectFit: "contain",
              width: "2rem",
              marginRight: "0.5rem",
            }}
          />

          <h2 style={{ fontFamily: "'Jost', sans-serif" }}>My TODO</h2>
        </div>
        <div className="display search-container">
          <div className="search-bar">
            <BsSearch size={20} color="#000" />
            <input
              onFocus={() => setIsFocus(true)}
              onBlur={() => {
                if (!isHovered) {
                  setIsHover(false);
                }
              }}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              ref={inputRef}
            />
          </div>
          {search !== "" && isFocus ? (
            <div className="searchQuery" style={{ display: "box" }}>
              {todoData.map((item, index) => {
                const isMatch =
                  item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
                return (
                  <ul>
                    {isMatch && (
                      <li
                        className="list-item"
                        key={index}
                        style={{
                          border: item.completed
                            ? "1px solid #00a845"
                            : " 1px solid #df3949",
                        }}
                      >
                        <p style={{ color: "#000" }}>{item.title}</p>
                      </li>
                    )}
                  </ul>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
