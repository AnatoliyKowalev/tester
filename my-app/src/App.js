import React from 'react';
import WebTester from './components/webTester/WebTester'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './main.css';
import './js/main.js'

class App extends React.Component {

  render() {
    return (
      <div id="main">
        <WebTester />
      </div>
    );
  }
}



export default App