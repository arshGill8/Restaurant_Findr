import React from "react";
import { shallow } from 'enzyme'
import App from "components/App";
import RestaurantForm from 'containers/RestaurantForm'
import RestaurantList from 'containers/RestaurantList'

let wrapped

beforeEach(()=> {
  wrapped = shallow(<App />);
})

it("shows a restaurant search form", () => {
  expect(wrapped.find(RestaurantForm).length).toEqual(1);
});

it("shows a restaurant result list", () => {
  expect(wrapped.find(RestaurantList).length).toEqual(1);
});

