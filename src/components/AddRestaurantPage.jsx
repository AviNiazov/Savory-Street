import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRestaurantPage({ addRestaurant }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [images, setImages] = useState([]);
  const [addedDateTime] = useState(new Date().toLocaleString()); 

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRestaurant = {
      id: Date.now(),
      name,
      description,
      city,
      price,
      cuisine,
      images: images.split(","),
      addedDateTime  
    };
    addRestaurant(newRestaurant);
    navigate("/");
  };

  return (
    <div className="add-restaurant-page">
      <h2>Add a New Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          <textarea placeholder="Description:" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          <input type="text" placeholder="City:" value={city} onChange={(e) => setCity(e.target.value)} required />
        </label>
        <label>
          <input type="number" placeholder="Price:" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <label>
          <input type="text" placeholder="Cuisine:" value={cuisine} onChange={(e) => setCuisine(e.target.value)} required />
        </label>
        <label>
          <input type="text" placeholder="Images:" value={images} onChange={(e) => setImages(e.target.value)} required />
        </label>
        <label>
          Added Date & Time:
          <input type="text" value={addedDateTime} readOnly />
        </label>
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}

export default AddRestaurantPage;
