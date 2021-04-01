import React from "react";

function CardOffer({ offer }) {
  return (
    <div style={{ width: 300, heigth: 400 }} className="card" key={offer._id}>
      <img
        className="card__image"
        src={offer.image.secure_url}
        alt={offer.title}
        style={{ width: 298, heigth: 398 }}
      />
      <h1 className="card__title">{offer.title}</h1>
    </div>
  );
}

export default CardOffer;
