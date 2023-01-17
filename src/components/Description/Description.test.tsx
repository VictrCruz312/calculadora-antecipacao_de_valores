import React from "react";
import { render, screen } from "@testing-library/react";
import Description from "./";

describe("Description component", () => {
  test("renders children correctly", () => {
    const text = "Test text";
    render(<Description>{text}</Description>);
    const renderedText = screen.getByText(text);
    expect(renderedText).toBeInTheDocument();
  });

  test("renders color text correctly", () => {
    const color = "red";
    render(<Description colorText={color}>Text</Description>);
    const description = screen.getByText("Text");
    expect(description).toHaveStyle(`color: ${color}`);
  });

  test("renders font size correctly", () => {
    const fontSize = "20px";
    render(<Description fontSize={fontSize}>Text</Description>);
    const description = screen.getByText("Text");
    expect(description).toHaveStyle(`font-size: ${fontSize}`);
  });
});
