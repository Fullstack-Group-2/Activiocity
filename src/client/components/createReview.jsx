import React, { useState } from "react";
import axios from "axios";

const CreateReview = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [createdReview, setCreatedReview] = useState(null); // State to store the created review
  const [createdRating, setCreatedRating] = useState(null);

  const handleCreateReview = async () => {
    try { 
      const { data } = await axios.post(
        "/api/reviews",
        { review, rating },
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("TOKEN"),
          },
        }
      );
      
      setCreatedReview(review);
      setCreatedRating(rating)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Review</h2>
      <input value={review} onChange={(e) => setReview(e.target.value)} />
      <h2>Create Rating</h2>
      <input value={rating} onChange={(e) => setRating(e.target.value)} />
      <button onClick={handleCreateReview}>Create Review</button>

      
      {createdReview && (
        <div>
          <h3>Created Review:</h3>
          <p>{createdReview}</p>
        </div>
      )}

      {createdRating && (
        <div>
          <h3>Created Rating:</h3>
          <p>{createdRating}</p>
        </div>
      )}
    </div>
  );
};

export default CreateReview;
