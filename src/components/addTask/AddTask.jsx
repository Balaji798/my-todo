import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const AddTask = ({ newTask, setNewTask, addTask }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      {open && (
        <div className="modal">
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="overlay"
          ></div>
          <div className="modal-content">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4 style={{ color: "#4cbee8" }}>Add New Task</h4>
              <RxCross2
                className="cancel-button"
                style={{ width: 25, height: 25 }}
                onClick={() => setOpen(false)}
              />
            </div>
            <p>Task</p>
            <input
              className="task-input"
              onChange={(e) => {
                setNewTask(e.target.value);
              }}
             onFocus={()=>setError(false)}
            />
            <div style={{height:"1rem"}}>

            {error && <p style={{ color: "red" }}>Task is required</p>}
            </div>
            <div
              className="button-add"
              onClick={() => {
                if (!newTask) {
                  setError(true);
                } else {
                  addTask();
                  setError(false);
                  setOpen(false)
                }
              }}
              style={{
                background: "#29335c",
                color: "#fff",
                width: "5rem",
                padding: "2.5px 10px",
                textAlign: "center",
                marginTop: "0.5rem",
              }}
            >
              Add
            </div>
          </div>
        </div>
      )}
      <button
        className="newAdd-button"
        onClick={() => {
          setOpen(true);
        }}
        style={{ opacity: open && 0 }}
      >
        Add New Task +
      </button>
    </>
  );
};

export default AddTask;
