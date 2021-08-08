import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import moment from "moment";

import client, { PRODUCTS, DISTRIBUTOR_ID } from "../../services/ApiService";

import useHomePage from "../HomePage/useHomePage";

import { Product } from "../../types";

const useProducts = () => {
  const [distributorId, setDistributorId] = useState<number>();
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const { geolocation } = useHomePage();

  useEffect(() => {
    distributorId && getProductsList();
  }, [distributorId]);

  const getDistributorId = () => {
    setIsLoadingProducts(true);
    const now = moment().format();
    client
      .query({
        query: DISTRIBUTOR_ID,
        variables: {
          algorithm: "NEAREST",
          lat: "-23.632919",
          long: "-46.699453",
          now,
        },
      })
      .then((result) => {
        console.log(result.data.pocSearch[0].id);
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
