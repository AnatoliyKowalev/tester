import React, { Component } from 'react'
import { Checkbox, Dropdown, DatePicker, Button } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChartBar } from '@fortawesome/pro-solid-svg-icons';    
import { MDBDataTable } from 'mdbreact';

export default class NewsSection extends Component {
  constructor(props){
		super(props);
		this.state = {
      activeFilters: false,
      tableData: {
        columns: [
          {
            label: 'Date/Time',
            field: 'dateTime',
            sort: 'asc',
            width: 110
          },
          {
            label: 'Symbol',
            field: 'symbol',
            sort: 'asc',
            width: 110
          },
          {
            label: 'Action',
            field: 'action',
            sort: 'asc',
            width: 110
          },
          {
            label: 'Priority',
            field: 'priority',
            sort: 'asc',
            width: 110
          },
          {
            label: 'Current',
            field: 'current',
            sort: 'asc',
            width: 120
          },
          {
            label: 'Prediction',
            field: 'prediction',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Previous',
            field: 'previous',
            sort: 'asc',
            width: 110
          }
        ],
        rows: [
          {
            dateTime: '2018.04.02 00:00',
            symbol: 'EUR',
            action: 'Italian Bank Holiday',
            priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} color={'green'}/>],
            current: '-0.6%',
            prediction: '-',
            previous: 0.1
          },
          {
            dateTime: '2018.04.02 00:00',
            symbol: 'JPY',
            action: 'Crube Oil Inventories',
            priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} color={'orange'}/>],
            current: '-0.3%',
            prediction: '-',
            previous: 0.1
          }
         
        ]
      },
      byDate: {
        option: '',
        changed: false,
        openDate: '',
        closeDate: ''
      },
      bySymbol: {
        changed: false,
        symbolsArr: ['EURUSD;', 'GBPUSD;', 'USDJPY;']
      },
      byPriority: {
        option: '',
        changed: false
      },
    

      filterParameters: {
        openDate: '',
        closeDate: '',
        symbolsArr: []
      }
    }
  }

  componentDidMount = () => {
    //set bydate parameter
    this.setState({
      byDate: {
        option: 'Any date',
        changed: false,
        openDate: '',
        closeDate: ''
      },
      byPriority: {
        option: 'All',
        changed: false
      }
    })
  }

  //Hide / show filters
  activeFilters = () => {
    this.setState({
      activeFilters: !this.state.activeFilters
    })
  }

  //Filter parameters-------------------
  //Add open date to filter parameters
  addOpenDateToFilterParameters = (e) => {
    let openDate = e.toISOString().slice(0, 10)
    this.setState({
      filterParameters: {
        openDate: openDate
      }
    })
    // this.state.filterParameters.openDate = openDate
  }
  //Add close date to filter parameters
  addCloseDateToFilterParameters = (e) => {
    let closeDate = e.toISOString().slice(0, 10)
    this.setState({
      filterParameters: {
        closeDate: closeDate
      }
    })
    // this.state.filterParameters.closeDate = closeDate
  }
  //Add symbol to filter parameters
  addSymbolToFilterParameters = (e) => {
    if(e.target.checked === true) {
      console.log('+')
    }
  }

  //Getting filter parameters
  getFiltersParameter = (e) => {
    let parametr = e.target.getAttribute('value')
    let filterParametr = e.target.classList
    
    if(filterParametr.contains('byDate')) {
      this.setState({
        [filterParametr]: {
          option: parametr,
          changed: false
        }
      })
      
    }
    
    if(filterParametr.contains('bySymbol')) {
      console.log('bySymbol')
    }

    if(filterParametr.contains('byPriority')) {
      this.setState({
        [filterParametr]: {
          option: parametr,
          changed: false
        }
      })
      
    }


  }  
  
  //Clear filters
  clearFilters = () => {
    this.setState({
      filterParameters: {
        openDate: '',
        closeDate: '',
        symbolsArr: []
      }
    })
    // console.log(this.state.filterParameters)
  }

  // gg = (e) => {
  //   let symbolText = '';
  //   let max = this.state.bySymbol.symbolsArr.length;
  //   this.state.bySymbol.symbolsArr.forEach(function(item, index) {
  //     if(index != max-1) {symbolText += item+';'} else {symbolText += item}

  //   })
  //  document.getElementById('symbolText').innerHTML = symbolText
  //   return symbolText
  // }

  render() {
    
    const dateDropDown		      =  <div className="filterDropDown">
                                      <p>{this.state.byDate.option}</p>
                                      <FontAwesomeIcon icon={faChevronDown} />
                                    </div>

    const symbolDropDown	    	=  <div className="filterDropDown">
                                      <p id="symbolText">{this.state.bySymbol.symbolsArr}</p>
                                      <FontAwesomeIcon icon={faChevronDown} />
                                    </div>

    const priorityDropDown		=  <div className="filterDropDown">
                                      <p>{this.state.byPriority.option}</p>
                                      <FontAwesomeIcon icon={faChevronDown} />
                                    </div>

    return (
      <div className="Section" >
        <div className="Section-name">News</div>
        <div className="Section__top">
          <div className={`filters d-flex align-items-start justify-content-start ${this.state.activeFilters ? 'flex-column ' : 'flex-row'}`}>

            <a href="#/" onClick={ this.activeFilters}>
              {this.state.activeFilters ? 'Hide filters'  : 'Show filters'}
            </a>

            <p>{this.state.activeFilters ? '' : 'no filters applied'}</p>
          
            {this.state.activeFilters ? 
              <div className="filters-content">
                <div className="filters-content__item">
                  <p>Filter by date:</p>
                  <Dropdown 
                    trigger={ dateDropDown } 
                    options={{constrainWidth: false}} 
                    onClick={this.getFiltersParameter} 
                  >
                    <a href="#/" value="Any date" className="byDate">
                      Any date
                    </a>
                    <a href="#/" value="News date" className="byDate">
                      News date
                    </a>
                  </Dropdown>
                  {this.state.byDate.option === 'Any date' ? '' : 
                    <>
                      <div className="filters-content__item">
                        <p>Period from:</p>
                        <DatePicker 
                          options={{
                            showDaysInNextAndPreviousMonths:true, 
                            showClearBtn:true, 
                            format: 'yyyy-mm-dd',    
                          }} 
                          onChange={this.addOpenDateToFilterParameters}
                        />
                      </div>
                      <div className="filters-content__item">
                      <p>Period to:</p>
                      <DatePicker 
                        options={{
                          showDaysInNextAndPreviousMonths:true, 
                          showClearBtn:true, 
                          format: 'yyyy-mm-dd',    
                        }} 
                        onChange={this.addCloseDateToFilterParameters}
                      />
                      </div>
                    </>
                  }
                </div>
                <div className="filters-content__item">
                  <p onClick={this.gg}>Symbol:</p>
                  <Dropdown 
                    trigger={ symbolDropDown }
                    options={{
                      closeOnClick: false,
                      coverTrigger: false,
                      constrainWidth: false
                    }}
                  >
                    <Checkbox
                      value="EURUSD"
                      label="EURUSD"
                      filledIn
                      checked={true}
                      className="bySymbol"
                      onChange={this.getFiltersParameter}
                    />
                     <Checkbox
                      value="GBPUSD"
                      label="GBPUSD"
                      filledIn
                      checked={true}
                      className="bySymbol"
                      onChange={this.getFiltersParameter}
                    />
                    <Checkbox
                      value="USDJPY"
                      label="USDJPY"
                      filledIn
                      checked={true}
                      className="bySymbol"
                      onChange={this.getFiltersParameter}
                    />
                  </Dropdown>
                 
                </div>
                <div className="filters-content__item">
                  <p>Priority:</p>
                  <Dropdown 
                    trigger={ priorityDropDown } 
                    options={{constrainWidth: false}}
                    onClick={this.getFiltersParameter} 
                  >
                    <a href="#/" className="byPriority" value="All">
                      All
                    </a>
                    <a href="#/" className="byPriority" value="High">
                      High
                    </a>
                    <a href="#/" className="byPriority" value="Midle">
                      Midle
                    </a>
                    <a href="#/" className="byPriority" value="Low">
                      Low
                    </a>
                  </Dropdown>
               
                </div>
                <div className="filters-content__item filterBtn">
                  <Button>
                    Apply
                  </Button>
                  <Button onClick={this.clearFilters}>
                    Clear
                  </Button>
                </div>
            
              </div> 
              :''
            }
          
          </div>
        </div>
        <div className="Section__bottom column extraMt _30">
          <MDBDataTable
            className="tableTextCenter"
            searching={false}
            scrollY
            scrollX
            maxHeight='146px'
            striped
            hover
            bordered
            small
            data={this.state.tableData}
          />
   
        </div>
      </div>
    )
  }


}