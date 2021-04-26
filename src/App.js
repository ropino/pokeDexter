import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home} />
          {/* <Route exact path="/poke/:id" component={}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
