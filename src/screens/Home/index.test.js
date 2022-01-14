import React from "react";
import {
  render,
  waitForElementToBeRemoved,
  fireEvent,
} from "@testing-library/react-native";
import axios from "axios";

import { navigationMock } from "../../services/tests/mocks";
import { POKEMONS } from "./__mocks__";

import Home from "./";

jest.mock("axios");

describe("Home", () => {
  test("should render the cards correctly", async () => {
    axios.get.mockResolvedValueOnce(POKEMONS);

    const { getByTestId, queryAllByTestId } = render(
      <Home navigation={navigationMock} />
    );

    await waitForElementToBeRemoved(() => getByTestId("loading"));

    expect(queryAllByTestId("card").length).toBe(5);
  });

  test("should search the pokemon correctly", async () => {
    axios.get.mockResolvedValueOnce(POKEMONS);

    const { getByTestId, queryAllByTestId } = render(
      <Home navigation={navigationMock} />
    );

    await waitForElementToBeRemoved(() => getByTestId("loading"));

    fireEvent.changeText(getByTestId("seach-input"), "bulbasaur");

    expect(queryAllByTestId("card").length).toBe(1);
  });

  test("should show not found text", async () => {
    axios.get.mockResolvedValueOnce(POKEMONS);

    const { getByTestId, queryAllByTestId, getByText } = render(
      <Home navigation={navigationMock} />
    );

    await waitForElementToBeRemoved(() => getByTestId("loading"));

    fireEvent.changeText(getByTestId("seach-input"), "aaaaa");

    expect(queryAllByTestId("card").length).toBe(0);

    expect(getByText("Ops, não encontramos nenhum Pokémon :(")).toBeTruthy();
  });
});
