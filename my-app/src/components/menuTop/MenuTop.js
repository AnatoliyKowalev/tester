import React, { Component } from 'react';
import TabHome from './tabs/TabHome'
import TabProject from './tabs/TabProject'
import TabCharts from './tabs/TabCharts'
import TabGraphics from './tabs/TabGraphics'
import TabIndicators from './tabs/TabIndicators'
import TabStrategies from './tabs/TabStrategies'
import TabTools from './tabs/TabTools'
import TabStore from './tabs/TabStore'
import TabHelp from './tabs/TabHelp'
// import MenuTub from './MenuTub'


class Tabs extends Component {
  constructor(props) {
    super();
    this.state = {
      active: 0
    }
  }
  
  select = (i) => {
    let _this = this;
    return function() {
      _this.setState({
        active: i
      });
    }
  }
  
  renderTabs = () => {
  	let listTabs = [
  		'Home',
  		'Project',
  		"Charts",
      "Graphics",
      "Indicators",
      "Strategies",
      "Tools",
      "Store",
      "Help"
  	]
  	
    // return React.Children.map(this.props.children, (item, i) => {
    //   if (i%2 === 0) {
    //     let active = this.state.active === i ? 'activeTab' : '';
    //     return <li><a onClick={this.select(i)} className={`${active} tab`}>{item}</a></li>;
    //   }
    // }
    // );
    return (
     	<ul className="Tabs">
	    	  {listTabs.map((value, index) =>{
	    	  	let active = this.state.active === index ? 'activeTab' : '';
	    	    return (<li key={index}>
	    	    			<a href="#" onClick={this.select(index)} 
	    	    				className={`${active} tab`}>
	    	    					{value}
	    	    			</a>
    	    			</li>);
	    	  })}
	    </ul>
	    );
  }
  
  renderContent() {
  	let subTabs = [
  		{
  			tab: <TabHome />
  		},
  		{
  			tab: <TabProject />
  		},
      {
        tab: <TabCharts />
      }
      ,
      {
        tab: <TabGraphics />
      }
      ,
      {
        tab: <TabIndicators />
      }
      ,
      {
        tab: <TabStrategies />
      },
      {
        tab: <TabTools />
      },
      {
        tab: <TabStore />
      },
      {
        tab: <TabHelp />
      }
  	]

    return subTabs.map((value, index) => {

	      if (index === this.state.active) {
				  let sectionName = value.tab;
  				return (
  				  <div key={index} className="setOfTools">{sectionName}</div>
        )} else {
	          return true;
	      }
	  })
  }

  render() {
  	
    return (
      <>
	       {this.renderTabs()}
	  
       	 {this.renderContent()}
      </>
    );
  }
}

// export default MenuTop;
export default Tabs;





