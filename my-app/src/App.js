import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './main.css';
import './js/main.js'

const WebTester = lazy(() => import('./components/webTester/WebTester'))
const PageNotFound = lazy(() => import('./components/pageNotFound/PageNotFound'))

class App extends React.Component {

  render() {
    return (
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <div id="main">
            <Switch>
              <Route exact path="/webTester" component={WebTester} />
              <Route component={PageNotFound} />
              <Route path="/404" component={PageNotFound} />
            </Switch>
          </div>
        </Suspense>
      </Router>
    );
  }
}

export default App