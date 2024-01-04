import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  const filtered = allUsers.filter((thisUser) =>
    {return thisUser.isAdmin === false}
  );

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`/auth/user/${id}`,
      {headers: {
        Authorization: "Bearer " + window.localStorage.getItem("TOKEN"),
      }}
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data: foundUser } = await axios.get("/auth/user");
        setAllUsers(foundUser);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);
  return (
        <>
            {filtered.map((thisUser) => {
                return (
                    <div key={thisUser.id}>
                    <div >{thisUser.username}</div>
                    <button onClick={() => deleteUser(thisUser.id)}>Delete</button>
                    </div>
                )
            })}
        </>

  )
}
export default AllUsers;