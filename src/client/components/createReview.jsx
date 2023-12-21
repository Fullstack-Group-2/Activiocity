import React, {useState} from "react";
import axios from "axios";

const createReview = () => {
  const [review, setReview] = useState("");

  const handleCreateReview = async() => {
    try {
      const {data} = await axios.post(
        "/api/reviews",
        {review},
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("TOKEN")
          },
        }
      );
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Create Review</h2>
      <input value={review} onChange={(e) => setReview(e.target.value)}/>
      <button onClick={handleCreateReview}>Create Review</button>
      
    </div>
  )
}

export default createReview;