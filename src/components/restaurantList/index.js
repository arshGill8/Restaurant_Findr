import React from 'react'
import 'styles/restaurantList.scss'

const RestaurantList = (props) => (
  <>
    <h1 className='header'>Restaurant List</h1>
    <ul className='list'>
      {props.restaurants.map(restaurant => {
        return (
          <li
            key={restaurant.id}
            className='list__item'
          >
            <div>{restaurant.name}</div>
            <div className="list__item--price">{restaurant.price}</div>
            <div>{restaurant.address}</div>
          </li>
        )
      })}
    </ul>
  </>
);

export default RestaurantList;

