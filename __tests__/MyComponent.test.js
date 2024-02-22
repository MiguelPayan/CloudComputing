import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import MyComponent from '../components/MyComponent';

test('renders MyComponent correctly', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
