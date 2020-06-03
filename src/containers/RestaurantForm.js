import { connect } from "react-redux";
import RestaurantForm from "components/restaurantForm";
import { fetchRestaurants } from "actions";

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: city => dispatch(fetchRestaurants(city))
  }
}



export default connect(null, mapDispatchToProps)(RestaurantForm)
