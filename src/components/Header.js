import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <h1
            onClick={() => {
              history.push("/");
            }}
          >
            Kalai-Commerce
          </h1>
          <form>
            <input type="text" placeholder="Search..." />
            <SearchIcon variant="contained" color="primary"></SearchIcon>
          </form>
        </div>

        <ul className="navigation">
          <li>Acceuil</li>
          <li>Produits</li>
          <li>Contact </li>
        </ul>
        <Button
          onClick={() => {
            history.push("/Login");
          }}
          variant="contained"
          color="primary"
        >
          LOGIN
        </Button>
      </div>
      <ShoppingCartIcon />
    </div>
  );
}

export default Header;
