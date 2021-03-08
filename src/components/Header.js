import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <div className="header">
      <div>
        <h1>Kalai-Commerce</h1>
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
      <ShoppingCartIcon />
    </div>
  );
}

export default Header;
