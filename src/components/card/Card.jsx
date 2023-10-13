import React from "react";
// import Stack from '@mui/material/Stack';
// import { PieChart } from '@mui/x-charts/PieChart';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GoChecklist } from "react-icons/go";
import { MdOutlinePendingActions } from "react-icons/md";
import "./card.css";
import { useSelector } from "react-redux";

const Card = (props) => {
  const {todoData} = useSelector((state) => state.todoList);
  const {completedTask}=useSelector((state)=>state.completedList);
  const {pendingTask}  = useSelector((state)=>state.pendingList);
  return (
    <div className="cardContainer">
      <div
        className="card display"
        onClick={() => {
          props.setCurrent(0);
        }}
        style={{ border: props.current === 0 && "1.5px solid #a108fe" }}
      >
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
        <p style={{ fontWeight: "bold" }}>
          {todoData?.length} Total Task
        </p>
      </div>
      <div
        className="card display"
        onClick={() => {
          props.setCurrent(1);
        }}
        style={{ border: props.current === 1 && "1.5px solid #00a845" }}
      >
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
          {completedTask?.length} Completed Task
        </p>
      </div>
      <div
        className="card display"
        onClick={() => {
          props.setCurrent(2);
        }}
        style={{ border: props.current === 2 && "1.5px solid #df3949" }}
      >
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
        <p style={{ fontWeight: "bold" }}>
          {" "}
          {pendingTask?.length} Pending Task
        </p>
      </div>
    </div>
  );
};

export default Card;
