import React from "react";
import classes from "../homePage.module.css";

interface SearchButtonProps {
  onClick: Function;
  isValidInput: boolean;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  onClick,
  isValidInput,
}) => {
  return (
    <button
      data-testid="search-button"
      onClick={() => onClick()}
      className={classes.confirmationButton}
      disabled={!isValidInput}
    >
      Procurar Bebidas
    </button>
  );
};

export default SearchButton;
