import React from "react";
import { Product } from "../../../../types";

import classes from "./productItem.module.css";

interface ProductItemProps {
  product: Product;
  index: number;
  removeProduct: Function;
  addProduct: Function;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  removeProduct,
  addProduct,
  index,
}) => {
  return (
    <li key={product?.id} className={classes.listItem}  data-testid="product-item">
      <p className={classes.productTitle}>{product?.title}</p>
      {product?.quantity !== 0 && (
        <span className={classes.quantity} data-testid="quantity">{product.quantity}</span>
      )}
      <div className={classes.buttonsContainer}>
        <button
          name="remove-product"
          data-testid="remove-product"
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
          data-testid="add-product"
          onClick={() => addProduct(index)}
          className={classes.button}
        >
          +
        </button>
      </div>

      <p className={classes.price}>R$ {product.productVariants[0].price}</p>
    </li>
  );
};

export default ProductItem;
