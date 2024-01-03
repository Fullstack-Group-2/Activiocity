import React, { useState } from "react";
import axios from "axios";

const CreateReview = () => {
  const [review, setReview] = useState("");
  const [createdReview, setCreatedReview] = useState(null); // State to store the created review

  const handleCreateReview = async () => {
    try {
      const { data } = await axios.post(
        "/api/reviews",
        { review }, // Send the review content in the request body
        {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("TOKEN"),
          },
        }
      );
      // Update createdReview state with the response data from the server
      setCreatedReview(data); // Assuming the response contains the created review data
      // Clear the input field after creating the review
      setReview("");
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during review creation
    }
  };

  return (
    <div>
      <h2>Create Review</h2>
      <input value={review} onChange={(e) => setReview(e.target.value)} />
      <button onClick={handleCreateReview}>Create Review</button>

      {/* Display the created review if available */}
      {createdReview && (
        <div>
          <h3>Created Review:</h3>
          <p>{createdReview.reviewContent}</p> {/* Update this with the correct field from the response */}
        </div>
      )}
    </div>
  );
};

export default CreateReview;

