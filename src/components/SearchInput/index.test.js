import React from "react";
import { render } from "@testing-library/react-native";
import SearchInput from "./";

const props = {
  onChangeText: jest.fn(),
  value: "",
};

describe("SearchInput", () => {
  test("should render correctly", async () => {
    const component = render(<SearchInput {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
