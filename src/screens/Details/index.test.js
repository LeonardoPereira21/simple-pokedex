import React from "react";
import {
  render,
  waitForElementToBeRemoved,
  fireEvent,
  cleanup,
} from "@testing-library/react-native";
import axios from "axios";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { navigationMock } from "../../services/tests/mocks";
import reducers from "../../services/reducers";

import { DETAILS, INITIAL_STATE, CAPTURED_STATE } from "./__mocks__";
import Details from "./";

const routeMock = {
  params: {
    url: "https://pokeapi.co/api/v2/pokemon/1",
  },
};

jest.mock("axios");

afterEach(cleanup);

describe("Details", () => {
  test("should render the name correctly", async () => {
    const store = createStore(reducers, INITIAL_STATE);
    axios.get.mockResolvedValue(DETAILS);

    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Details navigation={navigationMock} route={routeMock} />
      </Provider>
    );

    await waitForElementToBeRemoved(() => getByTestId("loading"));

    expect(getByText("bulbasaur")).toBeTruthy();
  });

  test("should add the pokemon to state", async () => {
    const store = createStore(reducers, INITIAL_STATE);
    axios.get.mockResolvedValue(DETAILS);

    const { getByTestId } = render(
      <Provider store={store}>
        <Details navigation={navigationMock} route={routeMock} />
      </Provider>
    );

    await waitForElementToBeRemoved(() => getByTestId("loading"));

    fireEvent.press(getByTestId("checkbox"));

    const state = store.getState();

    expect(state.captured.list.length).toBe(1);
    expect(state).toEqual(CAPTURED_STATE);
  });

  test("should remove the pokemon from state", async () => {
    const store = createStore(reducers, CAPTURED_STATE);
    axios.get.mockResolvedValue(DETAILS);

    const { getByTestId } = render(
      <Provider store={store}>
        <Details navigation={navigationMock} route={routeMock} />
      </Provider>
    );

    await waitForElementToBeRemoved(() => getByTestId("loading"));

    fireEvent.press(getByTestId("checkbox"));

    const state = store.getState();

    expect(state.captured.list.length).toBe(0);
    expect(state).toEqual({ captured: { list: [] } });
  });
});
