import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          TechTutor
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Router>
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
            </Link>
            </Router>
          </li>
          <li className="nav-item">
            <Router>
              <Link to={"/add"} className="nav-link">
                Add
            </Link>
            </Router>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Router>
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorial/:id" component={Tutorial} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;