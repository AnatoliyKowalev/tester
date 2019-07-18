import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import { MDBDataTable } from 'mdbreact';

export default class NewsSection extends Component {
  constructor(props) {
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
            priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} color={'red'} />],
            current: '-0.6%',
            prediction: '-',
            previous: 0.1
          },
          {
            dateTime: '2018.04.02 00:00',
            symbol: 'EUR',
            action: 'Italian Bank Holiday',
            priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} color={'orange'} />],
            current: '-0.6%',
            prediction: '-',
            previous: 0.1
          },
          {
            dateTime: '2018.04.02 00:00',
            symbol: 'EUR',
            action: 'Italian Bank Holiday',
            priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} color={'green'} />],
            current: '-0.6%',
            prediction: '-',
            previous: 0.1
          },
          {
            dateTime: '2018.04.02 00:00',
            symbol: 'EUR',
            action: 'Italian Bank Holiday',
            priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} color={'green'} />],
            current: '-0.6%',
            prediction: '-',
            previous: 0.1
          },
          {
            dateTime: '2018.04.02 00:00',
            symbol: 'EUR',
            action: 'Italian Bank Holiday',
            priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} color={'green'} />],
            current: '-0.6%',
            prediction: '-',
            previous: 0.1
          },
          {
            dateTime: '2018.04.02 00:00',
            symbol: 'EUR',
            action: 'Italian Bank Holiday',
            priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} color={'green'} />],
            current: '-0.6%',
            prediction: '-',
            previous: 0.1
          },
          {
            dateTime: '2018.04.02 00:00',
            symbol: 'JPY',
            action: 'Crube Oil Inventories',
            priority: [<FontAwesomeIcon key="#" icon={faChartBar} size={'2x'} color={'orange'} />],
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
        sellectedSymbols: 'Choose symbols',
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
  activeFilters = () => this.setState({ activeFilters: !this.state.activeFilters })

  //Filter parameters-------------------
  //Add open date to filter parameters
  addOpenDateToFilterParameters = (e) => {
    let openDate = e.toISOString().slice(0, 10)
    this.setState({
      filterParameters: {
        openDate: openDate
      }
    })
  }
  //Add close date to filter parameters
  addCloseDateToFilterParameters = (e) => {
    let closeDate = e.toISOString().slice(0, 10)
    this.setState({
      filterParameters: {
        closeDate: closeDate
      }
    })
  }
  //Add symbol to filter parameters
  addSymbolToFilterParameters = (e) => {
    if (e.target.checked) {
      console.log('+')
    }
  }

  //Getting filter parameters
  getFiltersParameter = (e) => {
    let filterParameter = e.currentTarget.name;
    let parameter = e.target.value;
    this.setState(() => {
      return {
        [filterParameter]: {
          option: parameter,
          changed: false
        }
      }
    });
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
  }

    //multiselect symbols
    getSymbolsArr = (e) => {
    
      let ul = e.target.closest('ul'),
          ulSize = ul.childElementCount,
          checkedSymbols = [];
  
      for (let i = 0; i <= ulSize - 1; i++) {
  
        let input = ul.children[i].children[0]
        if (input.checked) {
          checkedSymbols.push(input.id + ';')
        }
      }
      this.setState({ filterParameters: {
        ...this.state.filterParameters,
        sellectedSymbols: checkedSymbols
      } })
    }

  render() {
    return (
      <div className="Section" >
        <div className="Section-name">News</div>
        <div className="Section__top">
          <div className={`filters d-flex align-items-start justify-content-start ${this.state.activeFilters ? 'flex-column ' : 'flex-row'}`}>

            <button onClick={this.activeFilters}>
              {this.state.activeFilters ? 'Hide filters' : 'Show filters'}
            </button>

            <p>{this.state.activeFilters ? '' : 'no filters applied'}</p>

            {this.state.activeFilters ?
              <div className="filters-content">
                <div className="filters-content__item">
                  <p>Filter by date:</p>
                  <select name="byDate" onChange={this.getFiltersParameter}>
                    <option>Any date</option>
                    <option>News date</option>
                  </select>

                  {this.state.byDate.option === 'Any date'
                    ? ''
                    : 
                      <>
                        <p className="ml-2">Period from:</p>
                        <input type="date" onChange={this.addOpenDateToFilterParameters} />
                        <p className="ml-2">Period to:</p>
                        <input type="date" onChange={this.addCloseDateToFilterParameters} />
                      </>
                  }
                </div>
                <div className="filters-content__item">
                  <p>Symbol:</p>
                  <div className="dropDown multiplySelect">
                      <button className="dropTarget" >
                        <p>{this.state.filterParameters.sellectedSymbols}</p>
                     
                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                      <ul onClick={this.getSymbolsArr} >
                        <li>
                          <input id="EURUSD" type="checkbox" name="investment" value="stock" />
                          <label htmlFor="EURUSD" className=' check-item'>EURUSD</label>
                        </li>
                        <li>
                          <input id="YPJUSD" type="checkbox" name="investment" value="realestate" />
                          <label htmlFor="YPJUSD" className='check-item'>JPYUSD</label>
                        </li>
                        <li>
                          <input id="GBDJPY" type="checkbox" name="investment" value="mutualfund" />
                          <label htmlFor="GBDJPY" className='check-item'>GBDJPY</label>
                        </li>

                      </ul>
                    </div>


                </div>
                <div className="filters-content__item">
                  <p>Priority:</p>
                  <select name="byPriority" onChange={this.getFiltersParameter}>
                    <option>All</option>
                    <option>High</option>
                    <option>Midle</option>
                    <option>Low</option>
                  </select>
                </div>
                <div className="filters-content__item filterBtn">
                  <button>
                    Apply
                  </button>
                  <button onClick={this.clearFilters}>
                    Clear
                  </button>
                </div>
              </div>
              : ''
            }
          </div>
        </div>
        <div className="Section__bottom column extraMt _30">
          <MDBDataTable
            className="tableTextCenter"
            searching={false}
            scrollY
            scrollX
            maxHeight='125px'
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