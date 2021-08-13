/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import InputAddress from "../pages/HomePage/components/InputAddress";

describe("when rendered with a inputAddress and changeAddress props", () => {
  it("should be rendered on the document", () => {
    render(<InputAddress inputAddress="" handleChangeAddress={() => {}} />);
    expect(screen.getByTestId("input-address")).toBeInTheDocument();
  });
  it("should have the value send by inputAddress props on input element", () => {
    render(
      <InputAddress
        inputAddress="Rua Américo Brasiliense, São Paulo"
        handleChangeAddress={() => {}}
      />
    );
    expect(screen.getByTestId("input-address")).toHaveValue(
      "Rua Américo Brasiliense, São Paulo"
    );
  });
});
