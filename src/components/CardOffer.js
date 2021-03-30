import React from "react";

function CardOffer({ offer }) {
  return (
    <div key={offer._id}>
      <img
        src={offer.image.secure_url}
        alt={offer.title}
        style={{ width: 300, heigth: 400 }}
      />
      <h1>{offer.title}</h1>
      <p>{offer.category}</p>
    </div>
  );
}

export default CardOffer;
