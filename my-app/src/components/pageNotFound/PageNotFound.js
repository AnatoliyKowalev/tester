import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="notPagefound">
        <div className="container">
          <h1>404 Error</h1>
          <section class="error-container">
            <span>Page</span>
            <span>Not</span>
            <span>Found</span>
          </section>
          <Link to="/webTester">
            <button className="gohomePage">Go to home page</button>
          </Link>
        </div>
      </div>
    )
  }
}
