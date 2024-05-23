import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function RestaurantPage({ restaurants }) {
  const { id } = useParams();
  const restaurant = restaurants.find(restaurant => restaurant.id === parseInt(id));

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const images = restaurant.images || [];

  return (
    <div className="restaurant-page">
      <h2>{restaurant.name}</h2>
      <p>Description: {restaurant.description}</p>
      <Carousel 
        showArrows={false} 
        showThumbs={false} 
        showStatus={false} 
        swipeable={true} 
        emulateTouch={true} 
        infiniteLoop={true} 
        autoPlay={false} 
        interval={5000} 
        transitionTime={500}
      >
        {images.map((img, index) => (
          <div className="carousel" key={index}>
            <img src={img} alt={`Image ${index + 1} of ${restaurant.name}`} className="carousel-image" style={{ width: "50vw", height: "55vh", borderRadius: "12px" }} />
          </div>
        ))}
      </Carousel>
      <p>City: {restaurant.city}</p>
      <p>Price: {restaurant.price}</p>
      <p>Cuisine: {restaurant.cuisine}</p>
    </div>
  );
}

export default RestaurantPage;
