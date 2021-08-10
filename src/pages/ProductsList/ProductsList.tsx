import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useProducts from "./useProducts";
import classes from "./productsList.module.css";

const ProductsList = () => {
  const {
    products,
    isLoadingProducts,
    getDistributorId,
    addProduct,
    removeProduct,
  } = useProducts();

  const params = useParams<{ latitude: string; longitude: string }>();
  const { latitude, longitude } = params;

  useEffect(() => {
    latitude && longitude && getDistributorId(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <>
      <div className={classes.container}>
        {isLoadingProducts ? (
          <p className={classes.loading}>Carregando produtos...</p>
        ) : (
          <ul className={classes.list}>
            {products.map((product, index) => (
              <li key={product?.id} className={classes.listItem}>
                <p className={classes.productTitle}>{product?.title}</p>
                {product?.quantity !== 0 && (
                  <span className={classes.quantity}>
                    {product.quantity}
                  </span>
                )}
                <div className={classes.buttonsContainer}>
                  <button
                    name="remove-product"
                    onClick={() => removeProduct(index)}
                    className={classes.button}
                  >
                    -
                  </button>
                  <img
                    src={product?.images[0].url}
                    alt={`Uma imagem de ${product?.title} `}
                    className={classes.image}
                  />
                  <button
                    name="add-product"
                    onClick={() => addProduct(index)}
                    className={classes.button}
                  >
                    +
                  </button>
                </div>

                <p className={classes.price}>
                  R$ {product.productVariants[0].price}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ProductsList;
