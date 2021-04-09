import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard/:id' component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
