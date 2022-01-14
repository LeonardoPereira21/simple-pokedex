import React from "react";
import { render, cleanup } from "@testing-library/react-native";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { navigationMock } from "../../services/tests/mocks";
import reducers from "../../services/reducers";

import { INITIAL_STATE, CAPTURED_STATE } from "./__mocks__";
import Captured from "./";

afterEach(cleanup);

describe("Captured", () => {
  test("should show no pokemon messsage", async () => {
    const store = createStore(reducers, INITIAL_STATE);

    const { getByText } = render(
      <Provider store={store}>
        <Captured navigation={navigationMock} />
      </Provider>
    );

    expect(getByText("Você ainda não capturou nenhum Pokémon.")).toBeTruthy();
  });

  test("should render the cards correctly", async () => {
    const store = createStore(reducers, CAPTURED_STATE);

    const { queryByText, queryAllByTestId } = render(
      <Provider store={store}>
        <Captured navigation={navigationMock} />
      </Provider>
    );

    expect(queryByText("Você ainda não capturou nenhum Pokémon.")).toBeFalsy();

    expect(queryAllByTestId("card").length).toBe(4);
  });
});
