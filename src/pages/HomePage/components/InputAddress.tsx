import React from "react";
import classes from "../homePage.module.css";

interface InputAddressProps {
  inputAddress: string;
  handleChangeAddress: Function;
}

const InputAddress: React.FC<InputAddressProps> = ({
  inputAddress,
  handleChangeAddress,
}) => {
  return (
    <input
      data-testid="input-address"
      type="search"
      value={inputAddress}
      onChange={(e) => handleChangeAddress(e)}
      className={classes.input}
      placeholder={
        "Insira o endereço completo desejado para encontrar sua bebida"
      }
    />
  );
};

export default InputAddress;
