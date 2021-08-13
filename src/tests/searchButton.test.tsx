/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import SearchButton from "../pages/HomePage/components/SearchButton";

describe("when rendered with a onClick and a input props", () => {
  it("should be on the screen", () => {
    render(<SearchButton isValidInput={false} onClick={() => {}} />);
    expect(screen.getByTestId("search-button")).toBeInTheDocument();
  });

  it("should be disabled if input is invalid", () => {
    render(<SearchButton isValidInput={false} onClick={() => {}} />);
    expect(screen.getByTestId("search-button")).toBeDisabled();
  });

  it("should be enabled with a valid input", () => {
    render(<SearchButton isValidInput={true} onClick={() => {}} />);
    expect(screen.getByTestId("search-button")).toBeEnabled();
  });
});
