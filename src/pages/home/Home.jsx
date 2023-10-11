import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
//import { BiUserCircle } from "react-icons/bi";
import "./home.css";

const Home = () => {
  const [todoData, setTodoData] = useState([]);
  const [task, setTask] = useState("");
  const [alert, setAlert] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [newTask, setNewTask] = useState("");
  const [check, setCheck] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(1);
  const tasksPerPage = 10;

  const addTask = () => {};

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        )
          .then((response) => response.json())
          .then((json) => {
            console.log(json[0]);
            setTodoData(json);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getTodoList();
  }, []);

  const editTask = () => {};

  const completeTask = (id) => {
    if (!check.includes(id)) {
      setCheck([...check, id]);
    } else {
      const updatedCheck = [...check];
      updatedCheck.splice(id, 1);
      setCheck(updatedCheck);
    }
  };

  const deleteTask = () => {};

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = todoData.slice(indexOfFirstTask, indexOfLastTask);

  // Calculate the total number of pages
  const totalPages = Math.ceil(todoData.length / tasksPerPage);

  const pagesPerGroup = 3;
  // Generate the pagination buttons
  const startPage = (pageGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(pageGroup * pagesPerGroup, totalPages);

  // Generate the pagination buttons for the current group
  const pagination = [];
  for (let i = startPage; i <= endPage; i++) {
    pagination.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={currentPage === i ? "button-add active" : "button-add"}
      >
        {i}
      </button>
    );
  }

  // Generate "Previous" and "Next" buttons
  const previousButton = (
    <button
      key="prev"
      onClick={() => setPageGroup(pageGroup - 1)}
      disabled={pageGroup === 1}
      className="button-add"
    >
      Previous
    </button>
  );

  const nextButton = (
    <button
      key="next"
      onClick={() => setPageGroup(pageGroup + 1)}
      disabled={pageGroup >= Math.ceil(totalPages / pagesPerGroup)}
      className="button-add"
    >
      Next
    </button>
  );
  return (
    <div className="container">
      <from className="app-wrapper" style={{ marginBottom: "3rem" }}>
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
          style={{ background: "#29335c", color: "#fff" }}
        >
          Add
        </button>
      </from>
      {alert && <p style={{ color: "red" }}>Task Can not be empty</p>}
      <div className="todoContainer">
        {currentTasks?.map((item, index) => (
          <li className="list-item" key={index}>
            {editIndex === item.id ? (
              <input
                type="text"
                value={newTask}
                className="item"
                onChange={(e) => {
                  setNewTask(e.target.value);
                }}
                readOnly={editIndex === "" && editIndex !== item.id}
              />
            ) : (
              <p>{item.title}</p>
            )}
            <div>
              {editIndex === item.id ? (
                <div>
                  <button
                    className="button-add"
                    style={{
                      padding: "2px 5px",
                      fontSize: "16px",
                      margin: "3px 5px 0 0px",
                      borderRadius: "5px",
                    }}
                    onClick={editTask}
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
                    if (editIndex === item.id) {
                      setEditIndex("");
                    } else {
                      setEditIndex(item.id);
                      setNewTask(item.title);
                    }
                  }}
                />
              )}
              <BsCheck2Square
                className="button-complete"
                style={{
                  color: check.includes(item.id) ? "lightseagreen" : "#fff",
                }}
                onClick={completeTask}
              />
              <RiDeleteBin5Line
                className="button-delete"
                onClick={deleteTask}
              />
            </div>
          </li>
        ))}
      </div>
      <div className="pagination">
        {" "}
        {previousButton}
        {pagination}
        {nextButton}
      </div>
    </div>
  );
};

export default Home;

{
  /*
       
 */
}
