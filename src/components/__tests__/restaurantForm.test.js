import React from "react";
import { mount } from "enzyme";
import RestaurantForm from "containers/RestaurantForm";
import Root from "root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <RestaurantForm />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("input").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("input").simulate("change", {
      target: { value: "city name" },
    });
    wrapped.update();
  });

  it("has a input that users can type in", () => {
    expect(wrapped.find("input").prop("value")).toEqual("city name");
  });

  it("when form is submitted, text area get emptied ", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("input").prop("value")).toEqual("");
  });
});
