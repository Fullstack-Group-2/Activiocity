import React, { useState } from "react";
import axios from "axios";

const CreateReview = ({ userId }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [createdReview, setCreatedReview] = useState(null);
  const [createdRating, setCreatedRating] = useState(null);
  const [error, setError] = useState(null);

  const handleCreateReview = async () => {
    try {
      const { data } = await axios.post(
        "/api/reviews",
        { review, rating, userId }, // Include userId in the request
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("TOKEN"),
          },
        }
      );

      setCreatedReview(data.review);
      setCreatedRating(data.rating);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Failed to create review.");
    }
  };

  return (
    <div>
      <h2>Create Review</h2>
      <input value={review} onChange={(e) => setReview(e.target.value)} />
      <h2>Create Rating</h2>
      <input value={rating} onChange={(e) => setRating(e.target.value)} />
      <button onClick={handleCreateReview}>Create Review</button>

      {error && <div>Error: {error}</div>}
      
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


