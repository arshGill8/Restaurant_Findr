import React, { Component } from "react";
import "styles/restaurantForm.scss";

class RestaurantForm extends Component {
  state = { cityName: "" };

  handleChange = (e) => {
    this.setState({ cityName: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchRestaurants(this.state.cityName);
    this.setState({ cityName: "" });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="city_name">City</label>
        <input
          type="text"
          id='city_name'
          className="form__textArea"
          value={this.state.cityName}
          onChange={this.handleChange}
        />

        <button className="form__button" type="submit">
          SUBMIT
        </button>
      </form>
    );
  }
}

export default RestaurantForm;
