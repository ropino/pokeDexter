import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";

import Home from "./containers/Home";
import SinglePokemon from "./components/SinglePokemon";
import NoPokemon from "./components/NoPokemon";

import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./temaConfig"

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:id" component={SinglePokemon}/> 
          <Route exact path="/nopokemon" component={NoPokemon}/> 
        </Switch>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
