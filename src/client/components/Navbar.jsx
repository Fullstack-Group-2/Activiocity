import React, { useState } from "react";
import {Link} from "react-router-dom";

const Navbar = ({user}) => {
    const [searchterm, setSearchterm] = useState('');

    return (
        <>
            {user === 'administrator' ?
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
            : user === 'user' ?
            <div>
            <div>
                <h2>Logged In User Dashboard</h2>
                <Link to="/">
                <button>All Activities</button>
                </Link>
                <Link>
                <button>All My Reviews</button>
                </Link>
                <Link>
                <button>Add Review</button>
                </Link>
                <Link>
                <button>Edit Review</button>
                </Link>
                <Link>
                <button>Delete Review</button>
                </Link>
            </div>
            <div>
                <Link>
                <button>All My Comments</button>
                </Link>
                <Link>
                <button>Edit Comment</button>
                </Link>
                <Link>
                <button>Delete Comment</button>
                </Link>
            </div>
            </div>
            :
            <div>
                <Link to = "/">
                    <button>All Activities</button>
                </Link>
                <input placeholder="search..."
                    value={searchterm}
                    onChange={(e) => {setSearchterm(e.target.value)}}/>
                <Link to = "/login">
                    <button>Login</button>
                </Link>
                <Link to = "/register">
                    <button>Register</button>
                </Link>
            </div>
            }
        </>


    );
}
export default Navbar;