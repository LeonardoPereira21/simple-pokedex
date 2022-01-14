import React from "react";
import { render } from "@testing-library/react-native";

import Text from "./index";

describe("Text", () => {
  test("should render correctly", async () => {
    const component = render(<Text>Hello</Text>);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test("should apply styles correctly", async () => {
    const component = render(<Text style={{ color: "red" }}>Hello</Text>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
