import React, { useState } from "react";
import axios from "axios";

const createComment = () => {
  const [comment, setComment] = useState("");

  const handleCreateComment = async () => {
    try {
      const { data } = await axios.post(
        "/api/comments",
        { comment },
        {
          header: {
            Authorization: "Bearer " + window.localStorage.getItem("TOKEN"),
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Comment</h2>
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={createComment}>Send</button>
    </div>
  );
};

export default createComment;
