import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Formulaire from "./Formulaire";
import MapContainer from "./MapContainer";
import galerie from "./galerie";


 class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Stuff</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/Formulaire">Formulaire</NavLink>
            </li>
            <li>
              <NavLink to="/Map">Map</NavLink>
            </li>
            <li>
              <NavLink to="/galerie">galarie</NavLink>
            </li>
          </ul>
          <div className="content">
          
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
            <Route path="/Formulaire" component={Formulaire} />
            <Route path="/Map" component={MapContainer} />
            <Route path="/galerie" component={galerie} />
           </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
