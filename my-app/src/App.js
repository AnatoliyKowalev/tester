import React from 'react';
import Tabs from './components/menuTop/MenuTop';
import ChartContent from './components/chartContent/ChartContent';
// import {BrowserRouter as Router} from 'react-router-dom'
// import {Route, Switch} from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'; // It installs the JS asset only
import './main.css';


//     <Switch>
//        <Route exact path="/" component={Home} />
//        <Route exact path="/Home" component={Home} />
//       {/* <Route component={Error} />*/}
//      </Switch>

class App extends React.Component {

  render() {
    return (
	<div>
			
	      	<div id="topMenu"> 
      			<Tabs /> 	    
	        </div>

	        <div className="chart">
	        	<div className="row">
		      		<div className="col-lg-3">
		      			left bar
		      		</div>
		      		<div className="col-lg-9">
		      			 <ChartContent /> 
		      		</div>
		      	</div>
	        </div>

	    </div>
	 
    );
  }
}



export default App