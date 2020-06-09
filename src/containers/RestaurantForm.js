import { connect } from "react-redux";
import RestaurantForm from "components/restaurantForm";
import { fetchRestaurants, filterList } from "actions";

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: city => dispatch(fetchRestaurants(city)),
    filterList: filter => dispatch(filterList(filter))
  }
}



export default connect(null, mapDispatchToProps)(RestaurantForm)
