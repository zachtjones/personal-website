import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about and projects links', () => {
  render(<App />);
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Projects')).toBeInTheDocument();
});
