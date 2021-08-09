import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

import useProducts from "./useProducts";
import classes from "./productsList.module.css";

const ProductsList = () => {
  const {
    products,
    isLoadingProducts,
    getDistributorId,
  } = useProducts();

  const params = useParams<{latitude: string, longitude: string}>();
  const {latitude, longitude} = params;

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
          {products.map((product) => (
            <li key={product?.id} className={classes.listItem}>
              <p className={classes.productTitle}>{product?.title}</p>
              <span className={classes.quantity}>
                {product.quantity ? product.quantity : 0}
              </span>
              <div className={classes.buttonsContainer}>
                <button name="plus" className={classes.button}>
                  -
                </button>
                <img
                  src={product?.images[0].url}
                  alt={`Uma imagem de ${product?.title} `}
                  className={classes.image}
                />
                <button name="minus" className={classes.button}>
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
