import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class AccountHistorySection extends Component {
  constructor(props) {
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
            width: 160
          },
          {
            label: 'Open Price',
            field: 'openPrice',
            sort: 'asc',
            width: 110
          },
          {
            label: 'S/L',
            field: 'SL',
            sort: 'asc',
            width: 110
          },
          {
            label: 'T/P',
            field: 'TP',
            sort: 'asc',
            width: 110
          },
          {
            label: "Current price",
            field: 'currentPrice',
            sort: 'asc',
            width: 110
          },
          {
            label: "Comment",
            field: 'comment',
            sort: 'asc',
            width: 140
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
            profit: 11000.00
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
            profit: 11000.00
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
            profit: 11000.00
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
            profit: 11000.00
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
            profit: 11000.00
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
        sellectedSymbols: 'Choose symbols',
      }
    }
  }

  componentDidMount = () => {
    this.setState({
      byDate: {
        ...this.state.byDate,
        option: 'Any date',
      },
      byType: {
        ...this.state.byType,
        option: 'All'
      },
      byProfitType: {
        ...this.state.byProfitType,
        option: 'All'
      }
    })
  }

  //Hide / show filters
  activeFilters = (e) => {
    this.setState({ activeFilters: !this.state.activeFilters })
  }

  //Filter parameters-------------------
  //Add open date to filter parameters
  addOpenDateToFilterParameters = (e) => {
    let openDate = e.target.value.replace(/[-.]/g, m => (m === '.' ? '-' : '.'))
    this.setState({
      filterParameters: {
        openDate: openDate
      }
    })
  }
  //Add close date to filter parameters
  addCloseDateToFilterParameters = (e) => {
    let closeDate = e.target.value.replace(/[-.]/g, m => (m === '.' ? '-' : '.'))
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
  clearFilters = () => this.setState({
    filterParameters: {
      openDate: '',
      closeDate: '',
      symbolsArr: []
    }
  })
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
        <div className="Section-name">Account history</div>
        <div className="Section__top">
          <div className={`filters d-flex align-items-start justify-content-start ${this.state.activeFilters ? 'flex-column ' : 'flex-row'}`}>
            <button onClick={this.activeFilters}>
              {this.state.activeFilters ? 'Hide filters' : 'Show filters'}
            </button>
            <p>{this.state.activeFilters ? '' : 'no filters applied'}</p>

            {
              this.state.activeFilters
                ? <div className="filters-content">
                  <div className="filters-content__item">
                    <p>Filter by date:</p>
                    <select name="byDate" onChange={this.getFiltersParameter}>
                      <option>Any date</option>
                      <option>Open date</option>
                      <option>Close date</option>
                      <option>Close date or open date</option>
                      <option>Close date and open date</option>
                    </select>

                    {
                      this.state.byDate.option === 'Any date'
                        ? ''
                        : <>
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
                    <p>Type:</p>
                    <select name="byType" onChange={this.getFiltersParameter}>
                      <option>All</option>
                      <option>Buy</option>
                      <option>Sale</option>
                      <option>Deposit</option>
                      <option>WithDrawal</option>
                    </select>
                  </div>
                  <div className="filters-content__item">
                    <p>Type of profit:</p>
                    <select name="byProfitType" onChange={this.getFiltersParameter}>
                      <option>
                        All
                  </option>
                      <option>
                        Profit
                  </option>
                      <option>
                        Lesion
                  </option>
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
            searching={false}
            scrollY
            scrollX
            maxHeight='126px'
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