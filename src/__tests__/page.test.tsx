import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

const routes = [
  "/quote", "/pairs", "/stats", "/admin",
  "/api-keys", "/events", "/webhooks", "/docs",
];

describe("Home", () => {
  it("renders StableRoute heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /StableRoute/i })).toBeInTheDocument();
  });

  it("renders liquidity router subtitle", () => {
    render(<Home />);
    expect(screen.getByText(/Liquidity Router for Stellar/i)).toBeInTheDocument();
  });

  it("renders operator dashboard description without wallet copy", () => {
    render(<Home />);
    expect(screen.getByText(/operator dashboard/i)).toBeInTheDocument();
    expect(screen.queryByText(/connect your stellar wallet/i)).not.toBeInTheDocument();
  });

  it("renders links for all dashboard routes", () => {
    render(<Home />);
    for (const route of routes) {
      const link = screen.getByRole("link", { name: new RegExp(route.replace("/", ""), "i") });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", route);
    }
  });

  it("includes skip-to-main target with focus:outline-none", () => {
    render(<Home />);
    const main = screen.getByRole("main");
    expect(main).toHaveAttribute("id", "main-content");
    expect(main).toHaveAttribute("tabIndex", "-1");
  });
});
