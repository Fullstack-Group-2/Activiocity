import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AllActivities from "./components/AllActivities";
import Register from "./components/Register";
import Users from "./components/Users";
import "./App.css";
import SingleActivities from "./components/singleActvities";

function App() {
  const [user, setUser] = useState('user')

  return (
    <div className="App">
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<AllActivities/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Users" element={<Users />} />
        <Route path="/:id" element={<SingleActivities />} />
      </Routes>
    </div>
  );
}

export default App;
