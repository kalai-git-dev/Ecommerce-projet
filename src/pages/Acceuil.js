import React from "react";
import CardOffer from "../components/CardOffer";
import Caroussel from "../components/Caroussel";
import { Link } from "react-router-dom";
function Acceuil({ data, isLoading }) {
  console.log(data);
  let filterData1;
  let filterData2;
  let filterData3;
  if (!isLoading) {
    filterData1 = data.filter((offer) => {
      return offer.category.includes("Vêtements");
    });
  }
  if (!isLoading) {
    filterData2 = data.filter((offer) => {
      return offer.category.includes("Chaussures");
    });
  }
  if (!isLoading) {
    filterData3 = data.filter((offer) => {
      return offer.category.includes("Services");
    });
  }
  return isLoading ? (
    <p>en cours de chargemnt..</p>
  ) : (
    <>
      <Caroussel />
      <div>
        <h2>Vêtements</h2>
        {filterData1.map((offer) => {
          return (
            <Link to={"offer/" + offer._id} key={offer._id}>
              <CardOffer offer={offer} />
            </Link>
          );
        })}
      </div>
      <div>
        <h2>Chaussures</h2>
        {filterData2.map((offer) => {
          return (
            <Link to={"offer/" + offer._id} key={offer._id}>
              <CardOffer offer={offer} />
            </Link>
          );
        })}
      </div>
      <div>
        <h2>Services</h2>
        {filterData3.map((offer) => {
          return (
            <Link to={"offer/" + offer._id} key={offer._id}>
              <CardOffer offer={offer} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Acceuil;
