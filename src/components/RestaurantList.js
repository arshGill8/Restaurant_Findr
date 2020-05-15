import React from 'react'
import '../styles/RestaurantList.scss'

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


// address: "1 Benvenuto Place"
// area: "Toronto / SW Ontario"
// city: "Toronto"
// country: "CA"
// id: 21307
// image_url: "https://www.opentable.com/img/restimages/21307.jpg"
// lat: 43.68207
// lng: -79.40041
// mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=21307"
// name: "Scaramouche Restaurant"
// phone: "4169618011"
// postal_code: "M4V 2L1"
// price: 4
// reserve_url: "http://www.opentable.com/single.aspx?rid=21307"
// state: "ON"