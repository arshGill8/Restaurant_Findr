import React, { Component } from "react";
import "styles/restaurantForm.scss";

class RestaurantForm extends Component {
  state = { cityName: "", filterName: "" };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
    this.setState({ [e.target.name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchRestaurants(this.state.cityName);
    this.setState({ cityName: "" });
  };

  handleFilter = (e) => {
    e.preventDefault();
    this.props.filterList(this.state.filterName);
    this.setState({ filterName: "" });
  };

  render() {
    return (
      <div>
        <h1 data-testid="main-header" className="form__header">
          RestaurantFindr
        </h1>
        <form
          data-testid="city_form"
          className="form"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="cityName" className="form__label">
            City
          </label>
          <input
            type="text"
            data-testid="city_input"
            className="form__textArea"
            value={this.state.cityName}
            name="cityName"
            onChange={this.handleChange}
            placeholder="Enter name of city"
            id="cityName"
          />
          <button
            data-testid="city_button"
            className="form__button"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
        <br />
        <form className="form" onSubmit={this.handleFilter}>
          <label className="form__label" htmlFor="filterName">
            Filter
          </label>
          <input
            type="text"
            className="form__textArea"
            value={this.state.filterName}
            name="filterName"
            onChange={this.handleChange}
            placeholder="Filter restaurants"
            id="filterName"
          />
          <button className="form__button" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
