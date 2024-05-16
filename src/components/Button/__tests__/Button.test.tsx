/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Button from "../Button";

const mockStore = configureStore([]);

test("renders correctly", () => {
  const store = mockStore({ navbar: { darkMode: false } });
  const { asFragment } = render(
    <Provider store={store}>
      <Button label="Click me" onClick={() => {}} />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("calls onClick handler when clicked", () => {
  const onClick = jest.fn();
  const store = mockStore({ navbar: { darkMode: false } });
  const { getByText } = render(
    <Provider store={store}>
      <Button label="Click me" onClick={onClick} />
    </Provider>
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const button = getByText("Click me");
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});

test("renders purple button correctly", () => {
  const store = mockStore({ navbar: { darkMode: false } });
  const { getByText } = render(
    <Provider store={store}>
      <Button label="Click me" purpleButton onClick={() => {}} />
    </Provider>
  );
  const button = getByText("Click me");
  expect(button).toHaveClass("purple_button");
});
