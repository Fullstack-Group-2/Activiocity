import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddActivity = () => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [location, setLocation] = useState('');
const [seasonCategory, setSeasonCategory] = useState('');
const [isWet, setIsWet] = useState(true);
const [rating, setRating] = useState(5);
const [imageURL, setImageUrl] = useState('');
const navigate = useNavigate();

const handleAddActivity = async() => {
    try {
        const response = await axios.post("/api/activities",
        {
            title,
            description,
            location,
            seasonCategory,
            isWet,
            rating,
            imageURL,
        },
        {
            headers: {
              Authorization: "Bearer " + window.localStorage.getItem("TOKEN"),
            },
          }
        );
        navigate("/Admin");
    } catch (error) {
        console.log(error);
    }
}

return (
    <>
        <div>
        <h3>Title</h3>
        <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <h3>Description</h3>
        <input placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <h3>Location</h3>
        <input placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <h3>Season</h3>
        <input placeholder="season" value={seasonCategory} onChange={(e) => setSeasonCategory(e.target.value)} />
        <h3>Is Wet Activity</h3>
        <input value={isWet} onChange={(e) => setIsWet(e.target.value)} />
        <h3>Rating</h3>
        <input value={rating} onChange={(e) => setRating(e.target.value)} />
        <h3>Image URL</h3>
        <input placeholder="image URL"value={imageURL} onChange={(e) => setImageUrl(e.target.value)} /><br></br>
        <button onClick={handleAddActivity}>Submit</button>
        </div>
    </>
)
}

export default AddActivity;