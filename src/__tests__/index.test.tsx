import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatComponent from '../ChatComponent';

test('renders a button', () => {
  render(<ChatComponent />);
  expect(screen.getByRole('button')).toHaveTextContent('Click me');
});