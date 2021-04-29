import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import "../App.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(#CD2026 30%, #F00F17 90%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div  >
      <AppBar position="static" elevation={0} className={classes.root}/*  style={{backgroundColor: "#CD2026"}} */>
        <Toolbar variant="dense">
          <img src="https://i.imgur.com/algs72u.png" alt="Pokemon logo" style={{width: 160, marginRight: 20, marginBottom: 5, marginTop: 5}}/>
          {/* <Typography variant="h6" color="secondary">
            PokeDexter
          </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}