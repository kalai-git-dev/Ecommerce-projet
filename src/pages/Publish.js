import React from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// select input
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Publish() {
  const classes = useStyles();
  return (
    <div className="publish">
      <div className="publish__container">
        <div className="publish__infos">
          <div className="publish__infos__image">
            <input type="file" />
          </div>
          <div className="publish__infos_rigth">
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
            />
            <div className="category-sexe">
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Vêtements</MenuItem>
                  <MenuItem value={20}>Chaussures</MenuItem>
                  <MenuItem value={30}>Services</MenuItem>
                  <MenuItem value={30}>Autres</MenuItem>
                </Select>
              </FormControl>

              <FormControl component="fieldset">
                <FormLabel component="legend">Sexe</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  // value={value}
                  // onChange={handleChange}
                >
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
                </RadioGroup>
              </FormControl>
            </div>
            <TextareaAutosize
              rowsMin={10}
              label="Prix en Euro"
              variant="outlined"
              margin="normal"
              aria-label="maximum height"
              placeholder="Déscription*"
              defaultValue=""
            />
            {/* <label htmlFor="">Description</label>
            <textarea
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              type="description"
              id="description"
              autoComplete="current-description"
            /> */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Price"
              label="Prix en Euro"
              type="Price"
              id="Price"
              autoComplete="current-Price"
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
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="color"
            label="Couleur"
            type="color"
            id="color"
            autoComplete="current-color"
          />
        </div>
      </div>
    </div>
  );
}

export default Publish;
