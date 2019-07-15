import React, { Component } from 'react'
import { Checkbox, Dropdown, DatePicker, Button } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons';    
import { MDBDataTable } from 'mdbreact';

export default class AccountHistorySection extends Component {
  constructor(props){
		super(props);
		this.state = {
      activeFilters: false,
      tableData: {
        columns: [
          {
            label: 'Order',
            field: 'order',
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
            label: 'Type',
            field: 'type',
            sort: 'asc',
            width: 110
          },
          {
            label: 'Lot',
            field: 'lot',
            sort: 'asc',
            width: 110
          },
          {
            label: 'Open time',
            field: 'openTime',
            sort: 'asc',
            width: 120
          },
          {
            label: 'Open Price',
            field: 'openPrice',
            sort: 'asc',
            width: 150
          },
          {
            label: 'S/L',
            field: 'SL',
            sort: 'asc',
            width: 110
          },
          {
            label: 'T/P.',
            field: 'TP',
            sort: 'asc',
            width: 110
          },
          {
            label: "Current price",
            field: 'currentPrice',
            sort: 'asc',
            width: 120
          },
          {
            label: "Comment",
            field: 'comment',
            sort: 'asc',
            width: 150
          },
          {
            label: "Swop",
            field: 'swop',
            sort: 'asc',
            width: 110
          },
          {
            label: "Commission",
            field: 'commission',
            sort: 'asc',
            width: 110
          },
          {
            label: "Points",
            field: 'points',
            sort: 'asc',
            width: 110
          },
          {
            label: "Profit",
            field: 'profit',
            sort: 'asc',
            width: 110
          }
        ],
        rows: [
          {
            order: '0',
            symbol: ' ',
            type: 'deposit',
            lot: 0.00,
            openTime: '2018.04.02 00:00',
            openPrice: 0.00,
            SL: 0.00,
            TP: 0.00,
            closePrice: 0.00,
            comment: 'initial deposit',
            swop: 0.00,
            commission: 0.00,
            points: 0,
            profit: 10000.00
          },
          {
            order: '0',
            symbol: ' ',
            type: 'deposit',
            lot: 0.00,
            openTime: '2018.04.02 00:00',
            openPrice: 0.00,
            SL: 0.00,
            TP: 0.00,
            closePrice: 0.00,
            comment: 'initial deposit',
            swop: 0.00,
            commission: 0.00,
            points: 0,
            profit: 10000.00
          },
          {
            order: '0',
            symbol: ' ',
            type: 'deposit',
            lot: 0.00,
            openTime: '2018.04.02 00:00',
            openPrice: 0.00,
            SL: 0.00,
            TP: 0.00,
            closePrice: 0.00,
            comment: 'initial deposit',
            swop: 0.00,
            commission: 0.00,
            points: 0,
            profit: 10000.00
          },
          {
            order: '0',
            symbol: ' ',
            type: 'deposit',
            lot: 0.00,
            openTime: '2018.04.02 00:00',
            openPrice: 0.00,
            SL: 0.00,
            TP: 0.00,
            closePrice: 0.00,
            comment: 'initial deposit',
            swop: 0.00,
            commission: 0.00,
            points: 0,
            profit: 10000.00
          },
          {
            order: '1',
            symbol: ' ',
            type: 'deposit',
            lot: 1.00,
            openTime: '2018.04.02 00:00',
            openPrice: 0.3452,
            SL: 0.20,
            TP: 0.70,
            closePrice: 0.2653,
            comment: 'initial deposit',
            swop: 1.00,
            commission: 0.00,
            points: 2,
            profit: 10000.00
          },
          
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
      byType: {
        option: '',
        changed: false
      },
      byProfitType: {
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
      byType: {
        option: 'All',
        changed: false
      },
      byProfitType: {
        option: 'All',
        changed: false
      }
    })
  }

  //Hide / show filters
  activeFilters = (e) => {
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

    if(filterParametr.contains('byType')) {
      this.setState({
        [filterParametr]: {
          option: parametr,
          changed: false
        }
      })
    }

    if(filterParametr.contains('byProfitType')) {
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

    const typeDropDown	      	=   <div className="filterDropDown">
                                      <p>{this.state.byType.option}</p>
                                      <FontAwesomeIcon icon={faChevronDown} />
                                    </div>

    const profitTypeDropDown		=  <div className="filterDropDown">
                                      <p>{this.state.byProfitType.option}</p>
                                      <FontAwesomeIcon icon={faChevronDown} />
                                    </div>

    return (
      <div className="Section" >
        <div className="Section-name">Account history</div>
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
                    <a href="#/" value="Open date" className="byDate">
                      Open date
                    </a>
                    <a href="#/" value="Close date" className="byDate">
                      Close date
                    </a>
                    <a href="#/" value="Close date or open date" className="byDate">
                      Close date or open date
                    </a>
                    <a href="#/" value="Close date and open date" className="byDate">
                      Close date and open date
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
                  <p>Filter by date:</p>
                  <Dropdown 
                    trigger={ typeDropDown } 
                    options={{constrainWidth: false}}
                    onClick={this.getFiltersParameter} 
                  >
                    <a href="#/" className="byType" value="All">
                      All
                    </a>
                    <a href="#/" className="byType" value="Buy">
                      Buy
                    </a>
                    <a href="#/" className="byType" value="Sale">
                      Sale
                    </a>
                    <a href="#/" className="byType" value="Deposit">
                      Deposit
                    </a>
                    <a href="#/" className="byType" value="WithDrawal">
                      WithDrawal
                    </a>
                  </Dropdown>
               
                </div>
                <div className="filters-content__item">
                  <p>Filter by date:</p>
                  <Dropdown 
                    trigger={ profitTypeDropDown } 
                    options={{constrainWidth: false}}
                    onClick={this.getFiltersParameter} 
                  >
                    <a href="#/" className="byProfitType" value="All">
                      All
                    </a>
                    <a href="#/" className="byProfitType" value="Profit">
                      Profit
                    </a>
                    <a href="#/" className="byProfitType" value="Lesion">
                      Lesion
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
            searching={false}
            scrollY
            scrollX
            maxHeight='117px'
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