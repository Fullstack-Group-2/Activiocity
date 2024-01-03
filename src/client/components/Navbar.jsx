import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
          <Link to="/Users">
            <button>All Users</button>
          </Link>
          <Link to="/">
            <button>All Activities</button>
            <div>
            <button onClick>Logout</button>
          </div>
          </Link>
          <Link>
            <button>Add Activity</button>
          </Link>
          <Link>
            <button>Edit Activity</button>
          </Link>
          <Link>
            <button>Delete Activity</button>
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <h2>Welcome User</h2>
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
          <div>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
