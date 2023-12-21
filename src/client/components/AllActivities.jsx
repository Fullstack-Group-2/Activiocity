import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const AllActivities = () => {
  const [activities, setActivities] = useState([]);
  const [search, setSearch] = useState("")

  const filtered = activities.filter(
    (activity) =>
      activity.name.includes(search)
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
      <div>
        <input
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setSearch("")}>X</button>
        {search.length == 0
          ? activities.map((activities) => (
              <div key={activities.id} style={{ border: "2px solid black" }}>
                <Link to={`/${activities.id}`}>
                  <h3>Name: {activities.name}</h3>
                </Link>
                <h3>Description: {activities.description}</h3>
              </div>
            ))
          : filtered.map((activities) => (
              <div key={activities.id} style={{ border: "2px solid black" }}>
                <Link to={`/${activities.id}`}>
                  <h3>Name: {activities.name}</h3>
                </Link>
                <h3>Description: {activities.description}</h3>
              </div>
            ))}
      </div>
    </>
  );
};
export default AllActivities;
