import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

import client, { DISTRIBUTOR_ID } from "../../services/ApiService";
import Geocode from "../../services/GeolocationService";

const useHomePage = () => {
  const history = useHistory();
  const [inputAddress, setInputAddress] = useState("");
  const [distributorId, setDistributorId] = useState<number>();

  const handleChangeAddress = (event: React.FormEvent<HTMLInputElement>) => {
    setInputAddress(event.currentTarget.value);
  };

  useEffect(() => {
    distributorId && history.push(`/products/${distributorId}`);
  }, [distributorId]);

  const getFormattedAddress = async () => {
    await Geocode.fromAddress(inputAddress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry?.location;
        getDistributorId(lat, lng);
      },
      (error) => {
        return error.response;
      }
    );
  };

  const getDistributorId = (lat: string, long: string) => {
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
      })
      .catch((error) => {});
  };

  const isValidInput = inputAddress.length > 8;

  return {
    getFormattedAddress,
    inputAddress,
    handleChangeAddress,
    isValidInput,
    getDistributorId,
  };
};

export default useHomePage;
