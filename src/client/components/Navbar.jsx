import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WelcomeMessage from "./WelcomeMessage";

const Navbar = ({ token }) => {
  return (
    <>
      {token.token === "main" ? (
        <div>
          <Link to="/">
            <button>All Activities</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      ) : token.user.isAdmin === true ? (
        <div>
          <h2>Adminitrator Dashboard</h2>
          <Link to="/allUsers">
            <button>All Users</button>
          </Link>
          <Link to="/">
            <button>All Activities</button>
          </Link>
          <Link to="/addActivity">
            <button>Add Activity</button>
          </Link>
          <Link>
            <button>Edit Activity</button>
          </Link>
          <Link to="/">
            <div>
              <button onClick>Logout</button>
            </div>
            <button>All Activities</button>
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <WelcomeMessage token={token} />
            <Link to="/">
              <div>
                <button onClick>Logout</button>
              </div>
              <button>All Activities</button>
            </Link>
            <Link to="/reviews">
              <button>All My Reviews/Comments</button>
            </Link>
          </div>
          <div></div>
        </div>
      )}
    </>
  );
};
export default Navbar;
