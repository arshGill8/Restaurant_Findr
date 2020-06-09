import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
  waitFor,
} from "@testing-library/react";
import App from "components/App";
import Root from "root";
import { fetchRestaurants } from "actions";

afterEach(cleanup);

const fetchList = jest.fn(() => []);

it("allows users to enter a city name and submit form", async () => {
  const { getByTestId, debug } = render(
    <Root>
      <App />
    </Root>
  );

  const cityInput = getByTestId("city_input");

  fireEvent.change(cityInput, { target: { value: "Toronto" } });

  expect(cityInput.value).toBe("Toronto");

  const cityForm = getByTestId("city_form");

  fireEvent.submit(cityForm);

  expect(cityInput.value).toBe("");
});
