import React, { useState } from "react";

function RestaurantManagementPage({ restaurants, deleteRestaurant, editRestaurant }) {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [editedRestaurant, setEditedRestaurant] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      deleteRestaurant(id);
    }
  };

  const handleEdit = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setEditedRestaurant({ ...restaurant });
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRestaurant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editRestaurant(editedRestaurant);
    setSelectedRestaurant(null);
    setIsEditing(false);
  };

  const handleCloseModal = () => {
    setSelectedRestaurant(null);
    setIsEditing(false);
  };

  return (
    <div>
      <h2 className="Restaurant-Management-header">Restaurant Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Cuisine</th>
            <th>Price</th>
            <th>Added Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.description}</td>
              <td>{restaurant.cuisine}</td>
              <td>{restaurant.price}</td>
              <td>{restaurant.addedDateTime}</td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(restaurant.id)}>
                  <i className="fas fa-trash-alt"></i> Delete
                </button>
                <button className="edit-button" onClick={() => handleEdit(restaurant)}>
                  <i className="fas fa-edit"></i> Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for editing */}
      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2 >Edit Restaurant</h2>
            <form onSubmit={handleSubmit}>
              <div className="edit-inputs">
                <label>Name:</label>
                <input type="text" name="name" value={editedRestaurant.name} onChange={handleChange} />
              </div>
              <div className="edit-inputs">
                <label>City:</label>
                <input type="text" name="city" value={editedRestaurant.city} onChange={handleChange} />
              </div>
              <div className="edit-inputs">
                <label>Cuisine:</label>
                <input type="text" name="cuisine" value={editedRestaurant.cuisine} onChange={handleChange} />
              </div>
              <div className="edit-inputs">
                <label>Price:</label>
                <input type="text" name="price" value={editedRestaurant.price} onChange={handleChange} />
              </div>
              <button type="submit" className="save-button">
                <i className="fas fa-save"></i> Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RestaurantManagementPage;