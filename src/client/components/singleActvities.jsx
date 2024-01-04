import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreateReview from "./createReview";

const SingleActivities = (token) => {
  const { id } = useParams();
  const [activity, setActivity] = useState({});
  const navigate = useNavigate();

const deleteActivity =async() => {
  try {
    const response = await axios.delete(`/api/activities/${id}`,
    {headers: {
      Authorization: "Bearer " + window.localStorage.getItem("TOKEN"),
    }}
    );
    navigate("/Admin");
  } catch (error) {
    console.log(error);
  }
}

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
      {token.token.user.isAdmin === true?
      <button onClick={deleteActivity}>Delete Activity</button> : <div></div>}
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
        <CreateReview id = {id} />
      </div>
    </div>
  );
};

export default SingleActivities;
