import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            <h2>Logged In User Dashboard</h2>
            <Link to="/">
              <button>All Activities</button>
            </Link>
            <Link to="">
              <button>All My Reviews</button>
            </Link>
            <Link to="">
              <button>Add Review</button>
            </Link>
            <Link to="">
              <button>Edit Review</button>
            </Link>
            <Link to="/">
              <button>Delete Review</button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <button>All My Comments</button>
            </Link>
            <Link to="/">
              <button>Edit Comment</button>
            </Link>
            <Link to="">
              <button>Delete Comment</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
