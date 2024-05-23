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
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <label>
          Cuisine:
          <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} required />
        </label>
        <label>
          Images:
          <input type="text" value={images} onChange={(e) => setImages(e.target.value)} required />
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
