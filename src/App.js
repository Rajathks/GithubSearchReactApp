import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import AlertState from "./context/alert/AlertState";
import Home from "./components/Home";
import User from "./components/User";
import NotFound from './components/Pages/NotFound'
import Alert from "./components/Alert";
import About from "./components/Pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <header className="App-header">
              <Navbar title="Git Hub Finder Project " />

              <div className="container">
                <Alert />

                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/about" component={About}></Route>
                  <Route exact path="/user/:login" component={User} />
                  <Route component={NotFound}/>
                </Switch>
              </div>
            </header>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
