import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory, NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

function Header({ token, setUser, name }) {
  const [popup, setPopup] = useState(false);
  console.log("token ", token);
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
          Se D??conecter
        </li>
      </ul>
    </div>
  );
}

export default Header;
