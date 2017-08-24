import React, { Component } from 'react';

export default class About extends Component {
render() {
    return (
      <div className="content">
        <h1>Get in Touch</h1>
        <ul>
          <li><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:taylor@tayloracox.com" >Email</a></li>
          <li><i className="fa fa-linkedin" aria-hidden="true"></i> <a href="https://www.linkedin.com/in/tayloracox" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><i className="fa fa-github" aria-hidden="true"></i> <a href="https://www.github.com/tayloracox" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:18129725509">Phone</a></li>
        </ul>
      </div>
    );
  }
}
