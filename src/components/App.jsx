import React, { useState, useEffect } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import RestaurantList from "./RestaurantList";
import RestaurantPage from "./RestaurantPage";
import AddRestaurantPage from "./AddRestaurantPage";
import RestaurantManagementPage from './RestaurantManagementPage'; 
import "../style.css";
import restaurantsData from "../data/data";

function App() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
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
        <div className="header">
          Savory Street
          <div className="burger-menu" onClick={toggleMenu}>
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
        <div className="search-bar">
          {location.pathname !== "/add-restaurant" && location.pathname !== "/management" && !location.pathname.startsWith("/restaurant") && (
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by city ..."
            />
          )}
        </div>
        <div className={`menu-options ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="menu-item" onClick={toggleMenu}>
            <i className="fas fa-home"></i> Home
          </Link>
          <Link to="/add-restaurant" className="menu-item" onClick={toggleMenu}>
            <i className="fas fa-plus"></i> Add Restaurant
          </Link>
          <Link to="/management" className="menu-item" onClick={toggleMenu}>
            <i className="fas fa-cogs"></i> Management
          </Link>
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
  );
}

export default App;
