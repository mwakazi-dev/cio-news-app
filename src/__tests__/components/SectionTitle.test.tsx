import { render, screen } from "@testing-library/react";

import SectionTitle from "../../components/SectionTitle";

describe("SectionTile component", () => {
  test("renders  correctly", () => {
    render(<SectionTitle title="Test Section" />);
    const heading = screen.getByRole("heading", { name: "Test Section" });
    expect(heading).toBeInTheDocument();
  });
});
