import React from 'react';
import WebTester from './components/webTester/WebTester'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// import { Provider } from 'react-redux';
// import store from './store/store'; 
// import {BrowserRouter as Router} from 'react-router-dom'
// import {Route, Switch} from 'react-router-dom'
import 'materialize-css'; // It installs the JS asset only 
// import 'materialize-css/dist/css/materialize.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './main.css';
import './js/main.js'

//     <Switch>
//        <Route exact path="/" component={Home} />
//        <Route exact path="/Home" component={Home} />
//       {/* <Route component={Error} />*/}
//      </Switch>

class App extends React.Component {

  switchChartTheme= () => {
    this.setState({
      theme : {
        ...this.state.theme,
        mode: !this.state.theme.mode,
      }
    })
  }

  render() {
    return ( 
			<div id="main">
        <WebTester />
			</div>
    	// <Provider store={store}>
	   	
  		// </Provider>
    );
  }
}



export default App