import { connect } from "react-redux";
import RestaurantList from "components/restaurantList";

export default connect((state) => state.restaurant)(RestaurantList);
