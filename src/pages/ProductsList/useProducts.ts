import { useState } from "react";

import client, { PRODUCTS } from "../../services/ApiService";
import { Product } from "../../types";

const useProducts = () => {
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProductsFail, setLoadingProductsFail] = useState(false);

  const getProductsList = (distributorId: string) => {
    setIsLoadingProducts(true);
    client
      .query({
        query: PRODUCTS,
        variables: {
          id: distributorId,
          search: "",
          categoryId: null,
        },
      })
      .then((result) => {
        let products = result.data.poc.products;

        let changedProducts = products.map((product) => ({
          ...product,
          quantity: 0,
        }));
        setProducts(changedProducts);
        setIsLoadingProducts(false);
      })
      .catch(() => {
        setLoadingProductsFail(true);
      });
  };

  const addProduct = (position: number) => {
    let changedProducts = [...products];
    changedProducts[position].quantity += 1;
    setProducts(changedProducts);
  };

  const removeProduct = (position: number) => {
    let changedProducts = [...products];
    if (changedProducts[position].quantity !== 0) {
      changedProducts[position].quantity -= 1;
    }
    setProducts(changedProducts);
  };

  return {
    products,
    getProductsList,
    isLoadingProducts,
    addProduct,
    removeProduct,
    loadingProductsFail,
  };
};

export default useProducts;
