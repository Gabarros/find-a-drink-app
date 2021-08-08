import React, { useEffect } from "react";

import useProducts from "./useProducts";
import classes from "./productsList.module.css";

const ProductsList = () => {
  const {
    products,
    isLoadingProducts,
    getProductsList,
    getDistributorId,
  } = useProducts();

  useEffect(() => {
    console.log("Entrou");
    getDistributorId();
  }, []);

  return isLoadingProducts ? (
    <div>
      <h1>Carregando Produtos...</h1>
    </div>
  ) : (
    <div>
      <h1>Produtos carregados</h1>
      <ul className={classes.listContainer}>
        {products.map((product) => (
          <li key={product?.id}>
            <p>{product?.title}</p>
            <img
              src={product?.images[0].url}
              alt={`Uma imagem de ${product?.title} `}
              className={classes.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
