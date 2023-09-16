import React, { useState } from "react";
import { FaRegEdit, FaClipboardCheck } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [check, setCheck] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = async () => {
    if (task === "") {
    }
    const res = await axios.post("https://todo-backend-3x73.onrender.com/add-task", {
      task: task,
    });
    setList([...list, res.data]);
    setTask("");
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="header">
          <h1>My Todo</h1>
        </div>
        <div>
          <from>
            <input
              type="text"
              value={task}
              placeholder="Enter a Todo..."
              className="text-input"
              required
              onChange={(e) => {
                if (alert) setAlert(false);
                setTask(e.target.value);
              }}
              style={{ marginBottom: "10px" }}
            />

            <button
              className="button-add"
              onClick={() => {
                if (task === "") {
                  setAlert(true);
                } else {
                  addTask();
                }
              }}
            >
              Add
            </button>
          </from>
          {alert && <p style={{ color: "red" }}>Task Can not be empty</p>}
          <div>
            {list.map((item, index) => (
              <li className="list-item" key={index}>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={newTask}
                    className="list"
                    onChange={(e) => {
                      // e.preventDefault();
                      setNewTask(e.target.value);
                    }}
                    readOnly={editIndex === "" && editIndex !== index}
                  />
                ) : (
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      width: "200px",
                      paddingLeft: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {item}
                  </p>
                )}
                {editIndex === index ? (
                  <div>
                    <button
                      className="button-add"
                      style={{
                        padding: "2px 5px",
                        fontSize: "16px",
                        margin: "3px 5px 0 10px",
                        borderRadius: "5px",
                      }}
                      onClick={async () => {
                        const res = await axios.post(
                          "https://todo-backend-3x73.onrender.com/edit-task",
                          {
                            newTask: newTask,
                            index: index,
                          }
                        );
                        list[res.data.index] = res.data.newTask;
                        setEditIndex("");
                        if (check.includes(index)) {
                          const updatedCheck = [...check];
                          updatedCheck.splice(res.data.index, 1);
                          console.log(updatedCheck);
                          setCheck(updatedCheck);
                        }
                      }}
                    >
                      Save
                    </button>
                    <button
                      className="button-add"
                      style={{
                        padding: "2px 5px",
                        fontSize: "16px",
                        margin: "3px 10px 0",
                        borderRadius: "5px",
                      }}
                      onClick={() => setEditIndex("")}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <FaRegEdit
                    className="button-edit "
                    onClick={() => {
                      if (editIndex === index) {
                        setEditIndex("");
                      } else {
                        setEditIndex(index);
                        setNewTask(item);
                      }
                    }}
                  />
                )}
                <BsCheck2Square
                  className="button-complete"
                  style={{
                    color: check.includes(index) ? "lightseagreen" : "#fff",
                  }}
                  onClick={async() => {
                    if (!check.includes(index)) {
                      setCheck([...check, index]);
                    } else {
                      const res = await axios.post(
                        "https://todo-backend-3x73.onrender.com/complete-task",
                        {
                          index: index,
                        }
                      );
                      const updatedCheck = [...check];
                      updatedCheck.splice(res.data.index, 1);
                      setCheck(updatedCheck);
                    }
                  }}
                />
                <RiDeleteBin5Line
                  className="button-delete"
                  onClick={async () => {
                    const res = await axios.post(
                      "https://todo-backend-3x73.onrender.com/delete-task",
                      {
                        index: index,
                      }
                    );
                    const updatedList = [
                      ...list.slice(0, res.data.index),
                      ...list.slice(res.data.index + 1),
                    ];
                    setList(updatedList);
                  }}
                />
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
