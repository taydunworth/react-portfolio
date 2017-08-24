import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return (
      <div className="wrapper">
        <header>
          <nav>
            <ul>
              <li><NavLink activeClassName="active" exact to="/">Taylor A. Cox</NavLink></li>
              <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
              <li><NavLink activeClassName="active" to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
              <li><NavLink activeClassName="active" to="/references">References</NavLink></li>
            </ul>
          </nav>
        </header>
        <div>
          {this.props.children}
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}
