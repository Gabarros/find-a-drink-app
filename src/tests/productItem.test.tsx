/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import ProductItem from "../pages/ProductsList/components/ProductItem/ProductItem";

describe("when rendered with a product, index, removeProduct and addProduct props", () => {
  let product = {
    id: "1",
    title: "Produto 1",
    images: [{ url: "http://www.google.com" }],
    quantity: 0,
    productVariants: [{ price: 100.0 }],
  };
  render(
    <ProductItem
      product={product}
      index={1}
      removeProduct={() => {}}
      addProduct={() => {}}
    />
  );
  it("should be on the screen", () => {
    expect(screen.getByTestId("product-item")).toBeInTheDocument();
  });

  it("should not display quantity if product quantity is 0", () => {
    expect(screen.queryByTestId("quantity")).toBeNull();
  });

  it("should render quantity if product quantity is !== from 0", () => {
    product.quantity = 1;
    render(
      <ProductItem
        product={product}
        index={1}
        removeProduct={() => {}}
        addProduct={() => {}}
      />
    );
    expect(screen.getByTestId("quantity")).toBeInTheDocument();
  });
});

describe("when addProduct is clicked", () => {
  const product2 = {
    id: "1",
    title: "Produto 1",
    images: [{ url: "http://www.google.com" }],
    quantity: 1,
    productVariants: [{ price: 100.0 }],
  };

  it("should trigger the addProduct function", () => {
    const addProduct = jest.fn();
    render(
      <ProductItem
        product={product2}
        index={1}
        removeProduct={() => {}}
        addProduct={addProduct}
      />
    );

    fireEvent.click(screen.getByTestId("add-product"));
    expect(addProduct).toHaveBeenCalledTimes(1);
  });
});

describe("when removeProduct is clicked", () => {
  const product3 = {
    id: "1",
    title: "Produto 1",
    images: [{ url: "http://www.google.com" }],
    quantity: 1,
    productVariants: [{ price: 100.0 }],
  };

  it("should trigger the removeProduct function", () => {
    const removeProduct = jest.fn();
    render(
      <ProductItem
        product={product3}
        index={1}
        removeProduct={removeProduct}
        addProduct={() => {
          product3.quantity += 1;
        }}
      />
    );

    fireEvent.click(screen.getByTestId("remove-product"));
    expect(removeProduct).toHaveBeenCalledTimes(1);
  });
});
