import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleActivities = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState({});
  console.log("activity", activity);

  useEffect(() => {
    const getActivity = async () => {
      try {
        const { data: foundActivity } = await axios.get(
          `/api/activities/${id}`
        );
        setActivity(foundActivity);
      } catch (error) {
        console.error(error);
      }
    };
    getActivity();
  }, []);

  return (
    <div>
      <div>
        <h3>{activity.title}</h3>
        <h3>{activity.description}</h3>
        <h3>{activity.location}</h3>
        <h3>{activity.seasonCategory}</h3>
        <h3>{activity.isWet ? "Yes" : "No"}</h3>
        <h3>{activity.rating}</h3>
        <img src={activity.imageURL}/>

      </div>
    </div>
  );
};



export default SingleActivities;
