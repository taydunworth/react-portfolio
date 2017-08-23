import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return (
      <div className="wrapper">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Taylor A. Cox</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
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
