import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BlogCard from '../BlogCard';

const mockStore = configureStore([]);

test('renders BlogCard component with default props', () => {
  const store = mockStore({ navbar: { darkMode: false } });
  const blogProps = {
    title: 'Blog Title',
    type: 'Blog Type',
    description: 'Blog Description',
    isSelected: false,
    tag : "Regional Blog"
  };

  render(
    <Provider store={store}>
      <BlogCard {...blogProps} />
    </Provider>
  );

  const titleElement = screen.getByText('Blog Title');
  const typeElement = screen.getByText('Blog Type');
  const descriptionElement = screen.getByText('Blog Description');

  expect(titleElement).toBeInTheDocument();
  expect(typeElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});

test('renders BlogCard component with dark mode', () => {
  const store = mockStore({ navbar: { darkMode: true } });
  const blogProps = {
    title: 'Blog Title',
    type: 'Blog Type',
    description: 'Blog Description',
    isSelected: false,
    tag : "Regional Blog"

  };

  render(
    <Provider store={store}>
      <BlogCard {...blogProps} />
    </Provider>
  );

  const cardElement = screen.getByTestId('blog-card');
  const titleElement = screen.getByText('Blog Title');
  const descriptionElement = screen.getByText('Blog Description');

  expect(cardElement).toHaveClass('dark_background_card');
  expect(titleElement).toHaveClass('light_text');
  expect(descriptionElement).toHaveClass('light_text');
});

test('renders BlogCard component with isSelected prop', () => {
  const store = mockStore({ navbar: { darkMode: false } });
  const blogProps = {
    title: 'Blog Title',
    type: 'Blog Type',
    description: 'Blog Description',
    isSelected: true,
    tag : "Regional Blogs"
  };

  render(
    <Provider store={store}>
      <BlogCard {...blogProps} />
    </Provider>
  );

  const cardElement = screen.getByTestId('blog-card');
  expect(cardElement).toHaveClass('is_selected');
});