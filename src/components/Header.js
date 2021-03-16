import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory, NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

function Header({ token, setUser, name }) {
  const [popup, setPopup] = useState(false);
  console.log(token);
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
        {token ? (
          <div>
            <h3 className="avatar__name">{name}</h3>
            <Avatar
              className="avatar"
              onClick={() => {
                setPopup(!popup);
              }}
              alt={name}
              src=""
            />
          </div>
        ) : (
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
        )}
      </div>
      <ShoppingCartIcon />
      <ul className={popup ? "popup" : "popup hidden"}>
        <li>Modifier Profil</li>
        <li
          onClick={() => {
            history.push("/contact");
            setPopup(false);
          }}
        >
          Contact
        </li>
        <li
          onClick={() => {
            history.push("/publish");
            setPopup(false);
          }}
        >
          Publier un article
        </li>
        <li
          onClick={() => {
            setUser(null);
            history.push("/Sign-in");
            setPopup(false);
          }}
        >
          Se Déconecter
        </li>
      </ul>
    </div>
  );
}

export default Header;
