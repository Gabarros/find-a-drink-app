import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Geocode from "../../services/GeolocationService";

import { Geolocation } from "../../types";

const useHomePage = () => {
  const history = useHistory();
  const [geolocation, setGeolocation] = useState<Geolocation>();
  const [inputAddress, setInputAddress] = useState("");

  const handleChangeAddress = (event: React.FormEvent<HTMLInputElement>) => {
    setInputAddress(event.currentTarget.value);
  };

  useEffect(() => {
    geolocation && history.push(`/products/${geolocation.latitude}/${geolocation.longitude}`);
  }, [geolocation]);

  const getFormattedAddress = async () => {
    await Geocode.fromAddress(inputAddress).then(
      (response) => {
        let { lat, lng } = response.results[0].geometry?.location;
        setGeolocation({ latitude: lat, longitude: lng });
      },
      (error) => {
        return error.response;
      }
    );
  };

  const isValidInput = inputAddress.length < 8;

  return {
    getFormattedAddress,
    inputAddress,
    handleChangeAddress,
    isValidInput,
    geolocation,
  };
};

export default useHomePage;
