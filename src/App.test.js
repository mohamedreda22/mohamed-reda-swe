import { render, screen } from '@testing-library/react';
import App from './App';

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() { return null; }
    unobserve() { return null; }
    disconnect() { return null; }
  };
});

test('renders developer name', () => {
  render(<App />);
  const nameElement = screen.getAllByText(/Mohamed/i)[0];
  expect(nameElement).toBeInTheDocument();
});
