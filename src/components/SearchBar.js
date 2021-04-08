import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SearchBar({ setSearch, search, setCity, category, setCategory }) {
  // const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/offers?title=${search}&category=${category}`
      );
      setIsLoading(false);
      console.log(response.data);
      if (response.data) {
        history.push({
          pathname: `/Recherche/${search}`,
          state: { data: response.data, search: search },
        });
        setSearch("");
      }
    };

    fetchData();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Search..."
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <MenuItem value={"Vêtements"}>Vêtements</MenuItem>
              <MenuItem value={"Chaussures"}>Chaussures</MenuItem>
              <MenuItem value={"Services"}>Services</MenuItem>
              <MenuItem value={"Autres"}>Autres</MenuItem>
            </Select>
          </FormControl>
          <button type="submit">Recherche</button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
