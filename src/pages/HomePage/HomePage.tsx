import React from "react";

import useHomePage from "./useHomePage";
import classes from "./homePage.module.css";

const Home = () => {
  const {
    getFormattedAddress,
    inputAddress,
    handleChangeAddress,
    isValidInput,
  } = useHomePage();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.inputContainer}>
          <input
            type="search"
            value={inputAddress}
            onChange={(e) => handleChangeAddress(e)}
            className={classes.input}
            placeholder={
              "Insira o endereço completo desejado para encontrar sua bebida"
            }
          />
          <button
            onClick={() => getFormattedAddress()}
            className={classes.confirmationButton}
            disabled={isValidInput}
          >
            Procurar Bebidas
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
