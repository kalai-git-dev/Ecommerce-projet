import React from "react";
import { useLocation, Link } from "react-router-dom";
import CardOffer from "../components/CardOffer";

function FilterData() {
  const location = useLocation();
  console.log("location", location);
  const filterOffer = location.state.data.offers;
  const search = location.state.search;
  return (
    <div>
      <div>filters</div>
      {}
      <div>
        {filterOffer.length === 0 ? (
          <div>
            <h3>Aucun résultat pour {search}</h3>
            <p>
              Essayez de vérifier votre orthographe ou d’utiliser des termes
              plus généraux
            </p>
          </div>
        ) : (
          <div>
            {filterOffer.map((offer) => {
              return (
                <Link to={"offer/" + offer._id} key={offer._id}>
                  <CardOffer offer={offer} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterData;
