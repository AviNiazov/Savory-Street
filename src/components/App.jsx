import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RestaurantList from "./RestaurantList";
import RestaurantPage from "./RestaurantPage";
import AddRestaurantPage from "./AddRestaurantPage";
import RestaurantManagementPage from './RestaurantManagementPage'; 
import "../style.css";
import restaurantsData from "../data/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
 
  useEffect(() => {
    const storedRestaurants = localStorage.getItem("restaurants");
    if (storedRestaurants) {
      setRestaurants(JSON.parse(storedRestaurants));
    }
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addRestaurant = (restaurant) => {
    const updatedRestaurants = [...restaurants, restaurant];
    setRestaurants(updatedRestaurants);
    localStorage.setItem("restaurants", JSON.stringify(updatedRestaurants));
  };

  const deleteRestaurant = (id) => {
    const updatedRestaurants = restaurants.filter((restaurant) => restaurant.id !== id);
    setRestaurants(updatedRestaurants);
    localStorage.setItem("restaurants", JSON.stringify(updatedRestaurants));
  };

  const editRestaurant = (editedRestaurant) => {
    const updatedRestaurants = restaurants.map((restaurant) => {
      if (restaurant.id === editedRestaurant.id) {
        return editedRestaurant;
      }
      return restaurant;
    });
    setRestaurants(updatedRestaurants);
    localStorage.setItem("restaurants", JSON.stringify(updatedRestaurants));
  };

  return (
    <Router>
      <div>
        <div className="bar">
          <div className="button-group">
            <Link to="/" className="button home-button">
              <i className="fas fa-home"></i> Home
            </Link>
            <Link to="/add-restaurant" className="button">
              <i className="fas fa-plus"></i> Add Restaurant
            </Link>
            <Link to="/management" className="button">
              <i className="fas fa-cogs"></i> Management
            </Link>
          </div>
          <div className="header">Savory Street</div>
          <div className="search-bar">
            <label htmlFor="search"></label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search ..."
            />
          </div>
        </div>

        <Routes>
          <Route path="/" element={
            <RestaurantList
              restaurants={[...restaurantsData, ...restaurants]}
              selectedCategory={selectedCategory}
              searchTerm={searchTerm}
              handleCategoryChange={handleCategoryChange}
            />
          } />
          <Route path="/restaurant/:id" element={<RestaurantPage restaurants={[...restaurantsData, ...restaurants]} />} />
          <Route path="/add-restaurant" element={<AddRestaurantPage addRestaurant={addRestaurant} />} />
          <Route path="/management/*" element={<RestaurantManagementPage restaurants={restaurants} deleteRestaurant={deleteRestaurant} editRestaurant={editRestaurant} />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;