import React from "react";
import CardOffer from "../components/CardOffer";
import { Link } from "react-router-dom";
function Acceuil({ data, isLoading }) {
  console.log(data);
  return isLoading ? (
    <p>en cours de chargemnt..</p>
  ) : (
    <div>
      {data.map((offer) => {
        return (
          <Link to={"offer/" + offer._id} key={offer._id}>
            <CardOffer offer={offer} />
          </Link>
        );
      })}
    </div>
  );
}

export default Acceuil;
