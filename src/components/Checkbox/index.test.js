import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { COLORS } from "../../services/styles";
import Checkbox from "./";

const props = {
  text: "test",
  defaultChecked: false,
  onToggle: jest.fn(),
};

describe("Checkbox", () => {
  test("should render correctly", async () => {
    const component = render(<Checkbox {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test("expected the function to be called", async () => {
    const { getByTestId } = render(<Checkbox {...props} />);

    fireEvent.press(getByTestId("checkbox"));

    expect(props.onToggle).toHaveBeenCalled();
  });

  test("expected the checkbox to change color", async () => {
    const { getByTestId } = render(<Checkbox {...props} />);

    fireEvent.press(getByTestId("checkbox"));

    expect(getByTestId("checkbox")).toHaveStyle({
      backgroundColor: COLORS.RED,
    });
  });
});
