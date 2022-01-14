import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Header from "./";

const props = {
  pageTitle: "Page",
  goBack: jest.fn(),
};

describe("Header", () => {
  test("should render correctly", async () => {
    const component = render(<Header {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test("expected the function to be called", async () => {
    const { getByTestId } = render(<Header {...props} />);

    fireEvent.press(getByTestId("go-back-button"));

    expect(props.goBack).toHaveBeenCalled();
  });
});
