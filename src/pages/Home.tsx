import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../lib/supabaseClient";
import { yupResolver } from "@hookform/resolvers/yup";
import { Task } from "../types/Task";
import "./home.css";
import { Button, Modal } from "antd";
import { IoIosAddCircleOutline } from "react-icons/io";
import TaskModal from "../components/TaskModal";
import TaskItem from "../components/TaskItem";
import TaskFilter from "../components/TaskFilter";
import Pagination from "../components/pagination/Pagination";
import { TaskSchema } from "../utils/validation";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tasksPerPage] = useState<number>(5); // Adjust the number of tasks per page

  const {
    handleSubmit,
    reset,
    setValue,
    control, // Added control for Controller
    formState: { errors },
  } = useForm({
    resolver: yupResolver(TaskSchema),
  });
  // Fetch tasks from Supabase
  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: true })
         // Fetch tasks based on current page

      if (error) {
        console.error("Error fetching tasks", error);
      } else {
        setTasks(data);
        setFilteredTasks(data); // Initially, filtered tasks are the same as original
      }
      setLoading(false);
    };

    fetchTasks();
  }, [currentPage]); // Dependency on currentPage

  // Handle updating task
  const onSubmit = async (formData: Task) => {
    const { id, ...updatedData } = formData;

    if (id) {
      // Update task
      const { error } = await supabase
        .from("tasks")
        .update(updatedData)
        .eq("id", id);

      if (error) {
        console.error("Error updating task", error);
      } else {
        const updatedTasks = tasks.map((task) =>
          task.id === id ? { ...task, ...updatedData } : task
        );
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
        setIsModalOpen(false);
      }
    } else {
      // Create new task
      const { data, error } = await supabase
        .from("tasks")
        .insert(updatedData)
        .select();

      if (error) {
        console.error("Error creating task", error);
      } else {
        setTasks((prevTasks) => [...prevTasks, data[0]]);
        setFilteredTasks((prevTasks) => [...prevTasks, data[0]]);
        setIsModalOpen(false);
      }
    }

    reset();
  };

  const handleEditTask = (task: Task) => {
    setValue("title", task.title);
    setValue("description", task.description);
    setValue("assignee", task.assignee);
    setValue("priority", task.priority);
    setValue("status", task.status);
    setValue("due_date", task.due_date);
    setIsModalOpen(true);
    setTitle("Edit Task");
  };

  if (loading)
    return (
      <div className="container">
        <p>Loading tasks...</p>
      </div>
    );

  const handleFilterChange = (status: string) => {
    if (status === "") {
      setFilteredTasks(tasks); // Show all tasks
    } else {
      setFilteredTasks(tasks.filter((task) => task.status === status));
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (loading)
    return (
      <div className="container">
        <p>Loading tasks...</p>
      </div>
    );

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          style={{
            marginRight: "10px",
            zIndex: 0,
            backgroundColor: "#1677ff",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: 20,
          }}
          onClick={() => {
            setIsModalOpen(true);
            setTitle("Add New Task");
          }}
        >
          <IoIosAddCircleOutline /> Add New Task
        </button>
        <TaskFilter onFilterChange={handleFilterChange} />
      </div>
      <div className="app-wrapper">
        {filteredTasks.slice((currentPage - 1) * tasksPerPage, currentPage * tasksPerPage)
          .map((item) => (
            <TaskItem
              item={item}
              handleEditTask={handleEditTask}
              setIsModalOpen={setIsModalOpen}
              setTitle={setTitle}
            />
          ))}
      </div>
      <Pagination
        handlePreviousPage={handlePreviousPage}
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
      />
      <Modal
        title={title}
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={() => {
              console.log("Submit button clicked");
              handleSubmit(onSubmit)();
            }}
          >
            Submit
          </Button>,
        ]}
      >
        <TaskModal errors={errors} control={control} />
      </Modal>
    </div>
  );
};

export default Home;
