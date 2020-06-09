import axios from "axios";

const URL = `http://opentable.herokuapp.com/api/restaurants?city=`;

const fetchRestaurants = async (cityName) => {
  const response = await axios.get(`${URL}${cityName}`);
  if (response.status >= 400) {
    throw new Error(response.errors);
  }
  return response;
};

export default fetchRestaurants;

