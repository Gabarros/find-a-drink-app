import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import moment from "moment";

import client, { PRODUCTS, DISTRIBUTOR_ID } from "../../services/ApiService";
import { Product } from "../../types";

const useProducts = () => {
  const [distributorId, setDistributorId] = useState<number>();
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
 
  useEffect(() => {
    distributorId && getProductsList();
  }, [distributorId]);

  const getDistributorId = (lat: string, long: string) => {
    setIsLoadingProducts(true);
    const now = moment().format();
    client
      .query({
        query: DISTRIBUTOR_ID,
        variables: {
          algorithm: "NEAREST",
          lat,
          long,
          now,
        },
      })
      .then((result) => {
        const id = result.data.pocSearch[0].id;
        setDistributorId(id);
      });
  };

  const getProductsList = () => {
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
        setIsLoadingProducts(false);
        setProducts(result.data.poc.products);
        console.log(result.data.poc.products);
      });
  };

  return {
    products,
    getProductsList,
    getDistributorId,
    isLoadingProducts,
  };
};

export default useProducts;
