import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AllActivities from "./components/AllActivities";
import Register from "./components/Register";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<AllActivities/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />

      </Routes>
    </div>
  );
}

export default App;
