import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Review = ({ userId }) => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data: foundReviews } = await axios.get(`/api/reviews/${userId}`);
        setReviews(foundReviews);
      } catch (error) {
        console.error(error);
      }
    };
    getReviews();
  }, [userId]);

  return (
    <>
      <h1>Review Page</h1>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Review: {review.review}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
    </>
  );
};

export default Review;
