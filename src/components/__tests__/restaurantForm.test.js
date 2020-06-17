import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantForm from "components/restaurant_form";
import Root from "root";

afterEach(cleanup);

it("allows a user to enter a city name and filter name", async () => {

  const { getByTestId, debug } = render(
    <Root>
      <RestaurantForm />
    </Root>
  );

  const cityInput = getByTestId("city_input");
  const filterInput = getByTestId('filter_input')

  fireEvent.change(cityInput, { target: { value: "Toronto" } });
  
  fireEvent.change(filterInput, { target: { value: "100" } });


  expect(cityInput.value).toBe("Toronto");
  expect(filterInput.value).toBe("100");

  // const cityForm = getByTestId("city_form");

  // fireEvent.submit(cityForm);

});
