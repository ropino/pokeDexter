import React, { useState } from "react";
import axios from "axios";

import "../App.css";
import $ from "jquery";

import SinglePokemon from "../components/SinglePokemon";
import NoPokemon from "../components/NoPokemon";
import Navbar from "../components/Navbar";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button, TextField } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();
  const API = "https://pokeapi.co/api/v2/pokemon/";
  const [value, setValue] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [pokemonExist, setPokemonExist] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (e) => {
    let val = e.target.value;
    if (val){
       setValue(val.toLowerCase())
      } else {
      setChecked(false)
      setValue("");
      //setIsSearching(false);
    }
  };

  const handleSubmit = async (e) => {
    setChecked(true);
    e.preventDefault();
    if (value) {
      await axios
        .get(`${API}${value}`)
        .then((data) => {
          setPokemon({
            name: data.data.name,
            types: data.data.types,
            baseExperience: data.data.base_experience,
            height: data.data.height,
            weight: data.data.weight,
            abilities: data.data.abilities,
            img: data.data.sprites.other.dream_world.front_default,
          });
          setPokemonExist(true);
        })
        .catch((err) => setPokemonExist(false));
      setIsSearching(true);
    }
  };

  // $(document).on("keydown", function(e){
  //   if(e.code === "Enter"){
  //     console.log("EEE de jquery",e)
  //     console.log("EEEEE CODE",e.code)
  //     //e.preventDefault();
  //     handleSubmit(e)
  //     //return false
  //   }
  // })
 

  return (
    <div>
      <Navbar />
      <Grid container spacing={0}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={0}>
            <TextField
              id="standard-basic"
              label="Nombre del Pokemon"
              onChange={handleChange}
              onKeyPress={(e) => {
                if (e.code === "Enter") handleSubmit(e);
              }}
              value={value}
            />
            <Button
              color={"secondary"}
              className={"boton"}
              style={{ marginTop: 15 }}
              onClick={handleSubmit}
            >
              consultar
              <ArrowForwardIosIcon />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}></Paper>
        </Grid>
      </Grid>

       <Fade in={checked} appear={3000} enter={30000} exit={3000} >
        <div>
        {isSearching &&
          (pokemonExist ? <SinglePokemon poke={pokemon} /> : <NoPokemon />)}
      </div>
       </Fade> 
      

    </div>
  );
};

export default Home;
