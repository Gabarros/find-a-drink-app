import React, { useState } from "react";
import history from "../../services/history";

import classes from "./Home.module.css";

const Home = () => {
  const [productName, setProductName] = useState("");

  const handleChangeProductName = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setProductName(event.currentTarget.name);
  };

  const changePage = () => {
    history.push("/products");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={productName}
          onChange={(e) => handleChangeProductName(e)}
          className={classes.input}
        />
        <button onClick={changePage} className={classes.confirmationButton}>Procurar Produto</button>
      </div>
    </div>
  );
};

export default Home;
