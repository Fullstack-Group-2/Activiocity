import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AllActivities from "./components/AllActivities";
import AllUsers from "./components/AllUsers";
import Register from "./components/Register";
import Users from "./components/Users";
import Admin from "./components/Admin";
import Review from "./components/Review";
import "./App.css";
import SingleActivities from "./components/singleActvities";
import AddActivity from "./components/AddActivity";

function App() {
  const [token, setToken] = useState({
    token: "main",
    user: { username: "", password: "", isAdmin: false },
  });

  return (
    <div className="App">
      <Navbar token={token} />
      <Routes>
        <Route path="/" element={<AllActivities />} />
        <Route path="/Login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/:id" element={<SingleActivities token={token}/>} />
        <Route path="/Admin" element={<Admin />} />
        <Route
          path="/reviews"
          element={<Review userId={token.user.id} />}
        />
        <Route path="/allUsers" element={<AllUsers/>}/>
        <Route path="/addActivity" element={<AddActivity/>}/>
      </Routes>
    </div>
  );
}

export default App;
