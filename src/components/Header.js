import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory, NavLink } from "react-router-dom";

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
          <NavLink to="/">Acceuil</NavLink>
          <NavLink to="/Produits">Produits</NavLink>
          <NavLink to="/Contact">Contact </NavLink>
        </ul>
        <div className="button">
          <button
            onClick={() => {
              history.push("/Sign-up");
            }}
          >
            S'inscrire
          </button>
          <button
            onClick={() => {
              history.push("/Sign-in");
            }}
          >
            Se Connecter
          </button>
        </div>
      </div>
      <ShoppingCartIcon />
    </div>
  );
}

export default Header;
