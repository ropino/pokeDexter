import React from "react";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "left",
    borderColor: "none",
    listStyle: "none",
  },
  image: {
    flexDirection: "row",
    //justifyContent: "center",
    textAlign: "center",
    //verticalAlign: "middle",
    //alignItems: "center",
    //alignContent: "center",
    width: 600,
    marginLeft: 25,

  },
  text: {
    fontWeight: "lighter",
    textAlign: "center",
  },
}));

const NoPokemon = () => {
    const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}></Paper>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h5"
                  color="textSecondary"
                  component="h5" 
                  className={classes.text}>El pokemon que estas buscando no existe :(</Typography>
        <img src="https://i.imgur.com/q8Y098s.jpg" alt="Missing no image" className={classes.image}></img>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}></Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default NoPokemon;
