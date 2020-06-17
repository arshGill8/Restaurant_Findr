import React from "react";
import "styles/restaurantlist.css";

const RestaurantList = (props) => (
  <>
    <h1 className="header">Restaurant List</h1>
    <div className="sub-headings">
      <h2>Name</h2>
      <h2>Address</h2>
      <h2>Rating</h2>
    </div>
    <ul className="list">
      {props.restaurants.map((restaurant) => {
        return (
          <li
            data-testid="list-item"
            key={restaurant.id}
            className="list__item"
          >
            <div className="list__item--name">{restaurant.name}</div>
            <div>{restaurant.address}</div>
            <div className="list__item--price">{restaurant.price}</div>
          </li>
        );
      })}
    </ul>
  </>
);

export default RestaurantList;
