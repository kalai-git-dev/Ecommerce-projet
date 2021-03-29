import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
// import { useHistory } from "react-router-dom";
// select input
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Publish({ token }) {
  // const history = useHistory();
  const classes = useStyles();
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Autres");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [sexe, setSexe] = useState("");
  const [marque, setMarque] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  // preview image
  const [preview, setPreview] = useState("");

  //   console.log(picture);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("picture", picture);
    formData.append("description", description);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("city", city);
    formData.append("price", price);
    formData.append("sexe", sexe);
    formData.append("marque", marque);
    formData.append("size", size);
    formData.append("condition", condition);
    formData.append("color", color);

    const response = await axios.post(
      "https://e-commerce-kalai.herokuapp.com/publish",
      formData,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
    // if (response.data._id) {
    //   // redirectoin vers l'offre
    //   history.push(`/offer/${response.data._id}`);
    // } else {
    //   alert("Une erreur est survenue, veuillez réssayer");
    // }
  };

  return (
    <div className="publish">
      <form onSubmit={handleSubmit} className="publish__container">
        <div className="publish__infos">
          <div className="publish__infos__image">
            {preview ? (
              <img style={{ width: 300, height: 300 }} src={preview} alt="" />
            ) : (
              <input
                className="input__file"
                type="file"
                onChange={(e) => {
                  setPicture(e.target.files[0]);
                  setPreview(URL.createObjectURL(e.target.files[0]));
                }}
              />
            )}
          </div>
          <div className="publish__infos_rigth">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                required
                value={category}
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
            <hr />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="title"
              label="Titre"
              type="title"
              id="title"
              autoComplete="current-title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Sexe</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={sexe}
                required
                onChange={(e) => {
                  setSexe(e.target.value);
                }}
              >
                <div className="category-sexe">
                  <FormControlLabel
                    value="femme"
                    control={<Radio />}
                    label="Femme"
                  />
                  <FormControlLabel
                    value="homme"
                    control={<Radio />}
                    label="homme"
                  />
                </div>
              </RadioGroup>
            </FormControl>
            <TextareaAutosize
              style={{ display: "block" }}
              rowsMin={10}
              label="Prix en Euro"
              variant="outlined"
              margin="normal"
              aria-label="maximum height"
              placeholder="Déscription*"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Price"
              label="Prix en Euro"
              type="number"
              id="Price"
              autoComplete="current-Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="City"
              label="Ville"
              type="City"
              id="City"
              autoComplete="current-City"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="publish__details">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Marque"
            label="Marque"
            type="Marque"
            id="Marque"
            autoComplete="current-Marque"
            value={marque}
            onChange={(e) => {
              setMarque(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Size"
            label="Taille"
            type="Size"
            id="Size"
            autoComplete="current-Size"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Condition"
            label="État"
            type="Condition"
            id="Condition"
            autoComplete="current-Condition"
            value={condition}
            onChange={(e) => {
              setCondition(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="color"
            label="Couleur"
            // type="color"
            id="color"
            autoComplete="current-color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
        <Button variant="contained" type="submit" color="primary">
          Publier
        </Button>
      </form>
    </div>
  );
}

export default Publish;
