import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreateReview from "./createReview";

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
        <h3>The desired activity location is in {activity.location}</h3>
        <h3>The best time to do this activity is {activity.seasonCategory}</h3>
        <h3>
          Is it possible to get wet doing this? {activity.isWet ? "Yes" : "No"}
        </h3>
        <h3>
          This activity has a popularity rating of {activity.rating} out of 5
        </h3>
        <img src={activity.imageURL} width="640" height="426" />
      </div>

      <div>
        <CreateReview/>
      </div>
    </div>
  );
};

export default SingleActivities;
