import React from "react";
import { useLocation } from "react-router-dom";

function FilterData() {
  const location = useLocation();
  console.log("location", location.state.detail);
  return (
    <div>
      <div>filters</div>
      <div>produits</div>
    </div>
  );
}

export default FilterData;
