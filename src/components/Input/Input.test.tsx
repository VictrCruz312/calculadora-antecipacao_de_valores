import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./input";

describe("Input component", () => {
  test("renders input element with correct placeholder", () => {
    render(
      <Input
        register={() => {}}
        name="test"
        placeholder="test placeholder"
        type="text"
        error={undefined}
      />
    );
    const inputElement = screen.getByPlaceholderText(/test placeholder/i);
    expect(inputElement).toBeInTheDocument();
  });
});
