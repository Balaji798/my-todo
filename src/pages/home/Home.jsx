import React, { useState, useEffect } from "react";
import "./home.css";
import Card from "../../components/card/Card";
import AddTask from "../../components/addTask/AddTask";
import TotalTask from "../../components/TotalTask";
import CompletedTask from "../../components/CompletedTask";
import PendingTask from "../../components/PendingTask";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { setTodo } from "../../state/actions/todoAction";
import { setCompletedList } from "../../state/actions/completedAction";
import { setPendingTask } from "../../state/actions/pendingAction";

const Home = () => {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        await fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then(async (json) => {
            //console.log(json);
            await setTodo(dispatch, json);
            await setCompletedList(
              dispatch,
              json.filter((item) => {
                if (item.completed) {
                  return item;
                }
                return null;
              })
            );
            await setPendingTask(
              dispatch,
              json.filter((item) => {
                if (!item.completed) {
                  return item;
                }
                return null;
              })
            );
          });
      } catch (err) {
        console.log(err);
      }
    };
    getTodoList();
  }, [dispatch]);

  const addTask = async () => {
    const newTaskObject = {
      title: newTask,
      id: todoList.todoData.length + 1,
      userId: 1,
      completed: false,
    };
  
    // Update the entire todoData
    const updatedTodoData = [newTaskObject, ...todoList.todoData];
    await setTodo(dispatch, updatedTodoData);
  
    // Update the pending tasks
    const updatedPendingTasks = [newTaskObject, ...todoList.todoData.filter((item) => !item.completed)];
    await setPendingTask(dispatch, updatedPendingTasks);
  };

  return (
    <div className="container">
      <Card setCurrent={setCurrent} current={current} />

      {current === 0 ? (
        <TotalTask />
      ) : current === 1 ? (
        <CompletedTask />
      ) : (
        <PendingTask />
      )}
      <AddTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
    </div>
  );
};

export default Home;
