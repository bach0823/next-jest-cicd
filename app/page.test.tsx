/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("App Router");
});

it("Bibibi should be in the doc", () => {
  render(<Page />);
  expect(screen.getByText('Bibibi')).toBeInTheDocument();
})