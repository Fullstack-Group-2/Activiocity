import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div>
                <Link to = "/">
                    <button>All Activities</button>
                </Link>
                <Link to = "/login">
                    <button>Login</button>
                </Link>
                <Link to = "/register">
                    <button>Register</button>
                </Link>
            </div>
        </>


    );
}
export default Navbar;