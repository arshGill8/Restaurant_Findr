import { connect } from "react-redux";
import RestaurantList from "../components/RestaurantList";

// const mapStateToProps = state => ({restaurants: state.restaurants})

export default connect((state) => state.restaurant)(RestaurantList)
