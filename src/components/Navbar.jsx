import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(#CD2026 30%, #F00F17 90%)",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" elevation={0} className={classes.root}>
        <Toolbar variant="dense">
          <img
            src="https://i.imgur.com/algs72u.png"
            alt="Pokemon logo"
            style={{
              width: 160,
              marginRight: 20,
              marginBottom: 5,
              marginTop: 5,
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
