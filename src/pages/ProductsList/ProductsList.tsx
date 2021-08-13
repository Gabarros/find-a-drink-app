import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useProducts from "./useProducts";
import ProductItem from "./components/ProductItem/ProductItem";
import classes from "./productsList.module.css";

const ProductsList = () => {
  const {
    products,
    isLoadingProducts,
    addProduct,
    removeProduct,
    getProductsList,
  } = useProducts();

  const params = useParams<{ distributorId: string }>();
  const { distributorId } = params;

  useEffect(() => {
    distributorId && getProductsList(distributorId);
  }, [distributorId]);

  return (
    <>
      <div className={classes.container}>
        {isLoadingProducts ? (
          <p className={classes.loading}>Carregando produtos...</p>
        ) : (
          <ul className={classes.list}>
            {products.map((product, index) => (
              <ProductItem
                product={product}
                index={index}
                removeProduct={removeProduct}
                addProduct={addProduct}
                key={product?.id}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ProductsList;
