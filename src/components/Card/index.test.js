import React from "react";
import { render } from "@testing-library/react-native";

import Card from "./";

const props = {
  name: "Name",
  image: "",
  onPressButton: jest.fn(),
};

describe("Card", () => {
  test("should render correctly", async () => {
    const component = render(<Card {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
