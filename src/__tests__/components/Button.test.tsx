import { render, screen, fireEvent } from "@testing-library/react";

import Button from "../../components/Button";
import { ButtonVariant } from "../../types/enums";

describe("Button component", () => {
  test("renders button with default variant", () => {
    render(<Button label="Click me" />);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass("border", "border-[#1c1b21]", "text-darkest");
  });

  test("renders button with primary variant", () => {
    render(<Button label="Submit" variant={ButtonVariant.Primary} />);
    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toHaveClass("bg-primary");
  });

  test("renders button with secondary variant", () => {
    render(<Button label="Cancel" variant={ButtonVariant.Secondary} />);
    const button = screen.getByRole("button", { name: "Cancel" });
    expect(button).toHaveClass("bg-secondary", "text-light");
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    const button = screen.getByRole("button", { name: "Click me" });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
