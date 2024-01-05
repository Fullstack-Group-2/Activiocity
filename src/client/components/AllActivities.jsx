import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllActivities = () => {
  const [activities, setActivities] = useState([]);
  const [search, setSearch] = useState("");

  const filtered = activities.filter((activity) =>
    activity.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const getActivities = async () => {
      try {
        const { data: foundActivities } = await axios.get("/api/activities");
        setActivities(foundActivities);
        console.log(foundActivities);
      } catch (error) {
        console.error(error);
      }
    };
    getActivities();
  }, []);

  return (
    <>
      <h1>All Activities</h1>

      <input
        className="search"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSearch("")}>X</button>
      {search.length == 0
        ? activities.map((activities) => (
            <div
              className="activityMain"
              key={activities.id}
              style={{ border: "none" }}
            >
              <div className="activityFlexBox">
                <Link to={`/${activities.id}`}>
                  <h3 id="activityName">Name: {activities.title}</h3>
                </Link>
                <br></br>
                <img src={activities.imageURL} width="220" />

                <h3 id="activityDesc">Description: {activities.description}</h3>
              </div>
            </div>
          ))
        : filtered.map((activities) => (
            <div key={activities.id} style={{ border: "none" }}>
              <Link to={`/${activities.id}`}>
                <h3>Name: {activities.title}</h3>
              </Link>
              <h3>Description: {activities.description}</h3>
            </div>
          ))}
    </>
  );
};
export default AllActivities;
