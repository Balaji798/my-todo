import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

const App = () => {
  return (
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
