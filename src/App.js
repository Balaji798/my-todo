import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import SideBar from "./components/sidebar/SideBar";

const App = () => {
  return (
    // <Router>
    //   {/* <Header/> */}
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     {/* <Route path="/my-todo-list" element={<Todolist/>}/> */}
    //   </Routes>
    //   <Footer/>
    // </Router>
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
