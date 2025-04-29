import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ChatComponent } from '../src/ChatComponent';

jest.mock('axios', () => ({
    post: jest.fn(() => Promise.resolve({ data: 'mocked response' }))
  }));

test('renders a button', () => {
  render(<ChatComponent />);
  expect(screen.getByRole('button')).toHaveTextContent('Click me');
});