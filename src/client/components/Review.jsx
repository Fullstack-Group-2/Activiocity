import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Review = ({ userId}) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

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

  const handleDeleteReview = async (reviewId) => {
    try {
      const response = await axios.delete(`/api/reviews/${reviewId}`,
      {headers: {
        Authorization: "Bearer " + window.localStorage.getItem("TOKEN"),
      }}
      );
    } catch (error) {
      console.log(error);
    }
    }


  const handleEditReview = async () => {
    try {
      
   
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Review Page</h1>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Review: {review.review}</p>
          <p>Rating: {review.rating}</p>
          <button onClick={() => handleDeleteReview(review.id)}>Delete Review</button>
          <button onClick={() => handleEditReview(review.id, 'New review text')}>Edit Review</button>
        </div>
      ))}
    </>
  );
};

export default Review;


