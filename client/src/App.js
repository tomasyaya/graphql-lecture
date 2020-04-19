import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import PetsContainer from "./containers/PetsContainer";
import NewPetContainer from "./containers/NewPetContainer";
import { Wrapper } from "./layout";
import { Routes } from "./constants";
import "./index.css";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Switch>
        <Route exact path={Routes.HOME} render={() => <PetsContainer />} />
        <Route exact path={Routes.NEW} render={() => <NewPetContainer />} />
      </Switch>
    </Wrapper>
  );
}

export default App;
