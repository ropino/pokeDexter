import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "left",
    borderColor: "none",
    listStyle: "none"
  },
  image: {
    //flexDirection: "column",
    //justifyContent: "center",
    textAlign: "center",
    //verticalAlign: "middle",
    //alignItems: "center",
    //alignContent: "center",
  },
  text: {
    fontWeight: "lighter"
  },
}));

const SinglePokemon = (props) => {
  const pokemon = props.poke;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
      <Typography  variant="h2" component="h2" style={{textAlign: "center", textTransform: "capitalize", marginTop: 20}}>
                  {pokemon.name}
                </Typography>
        <Paper className={classes.paper} elevation={0}>
          <Grid container spacing={3}>
            <Grid item xs={6} >
              <div className={classes.image}>
                <img src={pokemon.img} alt="pokemon" style={{width: "250px", marginTop: 50}}/>
              </div>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={0}>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="textSecondary"
                  component="h5"
                >
                  {pokemon.types.length <= 1 ? <span className={classes.text}>Tipo: </span> : <span className={classes.text}>Tipos: </span>}
                  <ul>
                    {pokemon.types?.map((type) => {
                      return <li style={{listStyle: "none"}} key={type.type.name}>{type.type.name}</li>;
                    })}
                  </ul>
                </Typography>
                <Typography variant="h5" color="textSecondary" component="h5">
                  {pokemon.types.length <= 1 ? (
                    <span className={classes.text}>Habilidades: </span>
                  ) : (
                    <span className={classes.text}>Habilidad: </span>
                  )}
                  <ul>
                    {pokemon.abilities?.map((data) => {
                      return (
                        <li key={data.ability.name} style={{listStyle: "none"}}>{data.ability.name}</li>
                      );
                    })}
                  </ul>
                </Typography>
                <Typography variant="h5" color="textSecondary" component="h5" display="inline">
                <span className={classes.text}>Experiencia basica: </span>{pokemon.baseExperience}
                </Typography>
                <Typography variant="h5" color="textSecondary" component="h5">
                <span className={classes.text}>Altura: </span> {pokemon.height}
                </Typography>
                <Typography variant="h5" color="textSecondary" component="h5">
                <span className={classes.text}>Peso: </span> {pokemon.weight}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default SinglePokemon;
