import React from "react";
// import Stack from '@mui/material/Stack';
// import { PieChart } from '@mui/x-charts/PieChart';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GoChecklist } from "react-icons/go";
import { MdOutlinePendingActions } from "react-icons/md";
import "./card.css";

const Card = (props) => {
  return (
    <div className="cardContainer">
      <div className="card display">
        <div
          className="display"
          style={{
            background: "#e7dbff",
            width: "4rem",
            height: "4rem",
            borderRadius: "2rem",
            marginRight: "1.5rem",
          }}
        >
          <HiOutlineClipboardDocumentList color="#a108fe" size={"2.5rem"} />
        </div>
        <p style={{ fontWeight: "bold" }}>{props.totalTask} Total Task</p>
      </div>
      <div className="card display">
        <div
          className="display"
          style={{
            background: "#e0ffef",
            width: "4rem",
            height: "4rem",
            borderRadius: "2rem",
            marginRight: "1.5rem",
          }}
        >
          <GoChecklist color="#00a845" size={"2.5rem"} />
        </div>
        <p style={{ fontWeight: "bold" }}>
          {props.completedTask} Completed Task
        </p>
      </div>
      <div className="card display" style={{ flexWrap: "wrap" }}>
        <div
          className="display"
          style={{
            background: "#ffcced",
            width: "4rem",
            height: "4rem",
            borderRadius: "2rem",
            marginRight: "1.5rem",
          }}
        >
          <MdOutlinePendingActions color="#df3949" size={"2.5rem"} />
        </div>
        <p style={{ fontWeight: "bold" }}> {props.pendingTask} Pending Task</p>
      </div>
    </div>
  );
};

export default Card;
