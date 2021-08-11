import React from "react";

import useHomePage from "./useHomePage";
import InputAddress from "./components/InputAddress";
import SearchButton from "./components/SearchButton";

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
          <InputAddress
            inputAddress={inputAddress}
            handleChangeAddress={handleChangeAddress}
          />
          <SearchButton
            isValidInput={isValidInput}
            onClick={getFormattedAddress}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
