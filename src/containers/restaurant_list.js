import { connect } from "react-redux";
import RestaurantList from "components/restaurant_list";

export default connect((state) => state.restaurant)(RestaurantList);
