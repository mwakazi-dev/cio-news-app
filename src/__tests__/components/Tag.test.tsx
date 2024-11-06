import { render, screen } from "@testing-library/react";

import Tag from "../../components/Tag";

describe("Tag component", () => {
  test("renders tag correctly", () => {
    render(<Tag title="React" />);
    const tagText = screen.getByText("# React");
    expect(tagText).toBeInTheDocument();
  });
});
