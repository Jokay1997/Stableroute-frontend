import { render, screen } from "@testing-library/react";
import { Spinner } from "../Spinner";

describe("Spinner", () => {
  it("renders the default sr-only label", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });
  it("honours a custom label", () => {
    render(<Spinner label="Fetching pairs" />);
    expect(screen.getByText(/Fetching pairs/)).toBeInTheDocument();
  });
});
