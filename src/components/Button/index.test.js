import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import Button from "./";

const props = {
  text: "Hello",
  disabled: false,
  loading: false,
  onPress: jest.fn(),
};

describe("Button", () => {
  test("should render correctly", async () => {
    const component = render(<Button {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test("expected the function to be called", async () => {
    const { getByTestId } = render(<Button {...props} />);

    fireEvent.press(getByTestId("button"));

    expect(props.onPress).toHaveBeenCalled();
  });
});
