import { logRoles } from '@testing-library/dom';
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test('button starts with correct color and text', () => {
  const { container } = render(<App />);
  logRoles(container);
  const buttonElement = screen.getByRole('button', { name: /blue/i });
  expect(buttonElement).toHaveClass('red');
});

test('button starts with correct color and text after click', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /blue/i });
  expect(buttonElement).toHaveClass('red');
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/red/i);
  expect(buttonElement).toHaveClass('blue');
});

test('checkbox flow', () => {
  render(<App />);

  const buttonElement = screen.getByRole('button', { name: /blue/i });
  const checkboxElement = screen.getByRole('checkbox', { 
    name: /disable button/i 
  });

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
});
