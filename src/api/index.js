import axios from "axios";

const URL = `http://opentable.herokuapp.com/api/restaurants?city=`;

const fetchRestaurants = async (cityName) => {
  const response = await axios.get(`${URL}${cityName}`);
  const restaurants = response.data.restaurants;

  if (response.status >= 400) {
    throw new Error(restaurants.errors);
  }
  return restaurants;
};

export default fetchRestaurants;
