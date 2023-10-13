import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "../state/actions/todoAction";
import { setCompletedList } from "../state/actions/completedAction";
import { setPendingTask } from "../state/actions/pendingAction";
import Pagination from "./Pagination";

const CompletedTask = () => {
  const { todoData } = useSelector((state) => state.todoList);
  const { completedTask } = useSelector((state) => state.completedList);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(1);
  const [newValue, setNewValue] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const tasksPerPage = 10;
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const totalPages = Math.ceil(completedTask.length / tasksPerPage);

  const [currentTasks, setCurrentTask] = useState(
    completedTask.slice(indexOfFirstTask, indexOfLastTask)
  );

  useEffect(() => {
    setCurrentTask(completedTask.slice(indexOfFirstTask, indexOfLastTask));
  }, [
    currentPage,
    todoData,
    indexOfFirstTask,
    indexOfLastTask,
    completedTask,
  ]);

  const editTask = async (id) => {
    try {
      todoData.forEach((item) => {
        if (item.id === id) {
          item.title = newValue;
        }
      });
      completedTask.forEach((item) => {
        if (item.id === id) {
          item.title = newValue;
        }
      });

      await setTodo(dispatch, todoData);
      await setCompletedList(dispatch, completedTask);
      setCurrentTask(completedTask.slice(indexOfFirstTask, indexOfLastTask));
      setEditIndex("");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const completeTask = async (id) => {
    try {
      // Step 1: Toggle the 'completed' status of the task with the specified 'id'
      const updatedTodoData = todoData.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });

      // Step 2: Dispatch the updated 'todoData'
      await setTodo(dispatch, updatedTodoData);

      // Step 3: Create updated 'completedList' and 'pendingTask' arrays
      const updatedCompletedList = updatedTodoData.filter((item) => {
        if (item.completed) return item;
        return null;
      });
      const updatedPendingTask = updatedTodoData.filter((item) => {
        if (!item.completed) return item;
        return null;
      });

      // Step 4: Dispatch the updated 'completedList' and 'pendingTask'
      await setCompletedList(dispatch, updatedCompletedList);
      await setPendingTask(dispatch, updatedPendingTask);

      // Step 5: Update 'currentTasks' based on the updated data
      const updatedCurrentTasks = updatedPendingTask.slice(
        indexOfFirstTask,
        indexOfLastTask
      );

      setCurrentTask(updatedCurrentTasks);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      const updatedTodoData = todoData.filter((item) => {
        if (item.id !== id) return item;
        return null;
      });
      const updatedCompletedList = completedTask.filter((item) => {
        if (item.id !== id) return item;
        return null;
      });

      await setTodo(dispatch, updatedTodoData);
      await setCompletedList(dispatch, updatedCompletedList);

      // If you need to update `currentTasks` based on the updated data, do it here
      const updatedCurrentTasks = updatedCompletedList.slice(
        indexOfFirstTask,
        indexOfLastTask
      );
      setCurrentTask(updatedCurrentTasks);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div className="todoContainer">
        {currentTasks?.map((item, index) => (
          <li
            className="list-item"
            key={index}
            style={{
              border: item.completed
                ? "1px solid #00a845"
                : " 1px solid #df3949",
            }}
          >
            {editIndex === item.id ? (
              <input
                type="text"
                value={newValue}
                className="item"
                onChange={(e) => {
                  setNewValue(e.target.value);
                }}
                readOnly={editIndex === "" && editIndex !== item.id}
              />
            ) : (
              <p style={{ color: "#000" }}>{item.title}</p>
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
                    onClick={() => editTask(item.id)}
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
                      setNewValue(item.title);
                    }
                  }}
                />
              )}
              <BsCheck2Square
                className="button-complete"
                style={{
                  color: item.completed ? "lightseagreen" : "#df3949",
                }}
                onClick={() => {
                  completeTask(item.id);
                }}
              />
              <RiDeleteBin5Line
                className="button-delete"
                onClick={() => deleteTask(item.id)}
              />
            </div>
          </li>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageGroup={pageGroup}
        onPageChange={setCurrentPage}
        onPageGroupChange={setPageGroup}
      />
    </>
  );
};

export default CompletedTask;
