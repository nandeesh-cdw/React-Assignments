import React from "react";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import MemberCard from "../MemberCard";
import { Provider } from "react-redux";
import { Member } from "../../../models/models";

const mockStore = configureStore([]);
const store = mockStore({ navbar: { darkMode: false } });

test("renders member card with default props", () => {
  const member: Member = {
    id: 1,
    name: "Nandeesh",
    usernames: "wolfie",
    email: "string@example.com",
    photo: "xample.jpg",
    address: {
      street: "123 street",
      suite: "suite",
      city: "Bangalore",
      zip: "560092",
      geo: {
        lng: "123213123",
        lat: "23123123213",
      },
    },
    phone: "1239014214214",
    website: "string@example.com",
    company: {
      name: "name",
      location: "bangalore"
    }
  };

  render(
    <Provider store={store}>
      <MemberCard member={member} />
    </Provider>
  );
  const nameElement = screen.getByText(/Nandeesh/i);
  const locationElement = screen.getByText(/Bangalore/i);
  expect(nameElement).toBeInTheDocument();
  expect(locationElement).toBeInTheDocument();
});

test('renders member name and location with correct styles', () => {
  const member = {
    id: 1,
    name: "Nandeesh",
    usernames: "wolfie",
    email: "string@example.com",
    photo: "xample.jpg",
    address: {
      street: "123 street",
      suite: "suite",
      city: "Bangalore",
      zip: "560092",
      geo: {
        lng: "123213123",
        lat: "23123123213",
      },
    },
    phone: "1239014214214",
    website: "string@example.com",
    company: {
      name: "name",
      location: "bangalore"
    }
  };
  render(
    <Provider store={store}>
      <MemberCard member={member} />
    </Provider>
  ); const nameElement = screen.getByText(/Nandeesh/i);
  expect(nameElement).toHaveClass('name');
});
