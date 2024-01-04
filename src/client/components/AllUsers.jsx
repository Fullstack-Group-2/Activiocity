import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [search, setSearch] = useState("");

  //const filtered = allUsers.filter((thisUser) =>
   // thisUser.title.includes(search)
  //);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data: foundUser } = await axios.get("/auth/user");
        setAllUsers(foundUser);
        console.log(foundUser);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);
  return (
        <>
            {allUsers.map((thisUser) => {
                return (
                    <div key={thisUser.id}>
                    <div >{thisUser.username}</div>
                    <button>Delete</button>
                    </div>
                )
            })}
        </>

  )
}
export default AllUsers;