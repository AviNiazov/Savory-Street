import React from "react";
import { Link } from "react-router-dom";

function RestaurantList({ restaurants, selectedCategory, searchTerm, handleCategoryChange }) {
  const sortedData = (restaurants, category, term) => {
    let filteredRestaurants = category === "all" ? restaurants : restaurants.filter(restaurant => restaurant.cuisine === category);
    return term === "" ? filteredRestaurants : filteredRestaurants.filter(restaurant => restaurant.city.toLowerCase().includes(term.toLowerCase()));
  };

  return (
    <div className="restaurant-list">
      {sortedData(restaurants, selectedCategory, searchTerm).map((restaurant) => (
        <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id} className="restaurant-container">
          <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
          <div>
            <p className="restaurant-name">{restaurant.name}</p>
            <p className="city">City: {restaurant.city}</p>
            <p className="price">Price: {restaurant.price}₪</p>
            <p className="cuisine">Cuisine: {restaurant.cuisine}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RestaurantList;