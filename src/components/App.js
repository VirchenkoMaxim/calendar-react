import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import "../styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about" render={() => <About />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
};

export default App;
