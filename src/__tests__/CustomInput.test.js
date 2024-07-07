// src/__tests__/CustomInput.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomInput from '../components/CustomInput'; // Adjust path accordingly

test('renders CustomInput component', () => {
  render(<CustomInput label="Email" />);
  const labelElement = screen.getByText(/Email/i);
  expect(labelElement).toBeInTheDocument();
});