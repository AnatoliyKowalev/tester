import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { accountHistoryTable } from '../../../utils/constants'
export default class AccountHistorySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedSymbols: [],
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
        rows: accountHistoryTable,
        defaultTableDataRows: accountHistoryTable
      },
      byDate: {
        option: 'Any date',
        openDate: '',
        closeDate: ''
      },
      bySymbol: {
        changed: false,
        symbolsArr: []
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
        sellectedSymbols: '',
        filterString: ''
      }
    }
  }

  componentDidMount = () => {

    let symbolOptions = this.state.tableData.defaultTableDataRows, symbolsName = [], symbols = []

    symbolOptions.forEach(function (i) {
      symbolsName.push(i.symbol)
    })
    const uniqueAges = [...new Set(symbolsName)]
    uniqueAges.forEach(function (i) {
      symbols.push({ option: i, checked: false })
    })
    this.setState({
      ...this.state,
      // byDate: {
      //   ...this.state.byDate,
      //   option: 'Any date'
      // },
      byType: {
        ...this.state.byType,
        option: 'All'
      },
      byProfitType: {
        ...this.state.byProfitType,
        option: 'All'
      },
      bySymbol: {
        ...this.state.bySymbol,
        symbolsArr: symbols
      }
    })

  }
  //Hide / show filters
  activeFilters = (e) => {
    this.setState({ activeFilters: !this.state.activeFilters })
  }
  //Filter parameters-------------------
  //Add open date to filter parameters
  addOpenDateToFilterParameters = e => {
    let openDate = e.target.value.replace(/[-.]/g, m => (m === '.' ? '-' : '.'))
    this.setState({
      byDate: {
        ...this.state.byDate,
        openDate: e.target.value
      },
      filterParameters: {
        ...this.state.filterParameters,
        openDate: 'Open date:' + openDate + ' | '
      }
    })
  }
  //Add close date to filter parameters
  addCloseDateToFilterParameters = e => {
    let closeDate = e.target.value.replace(/[-.]/g, m => (m === '.' ? '-' : '.'))
    this.setState({
      byDate: {
        ...this.state.byDate,
        closeDate: e.target.value
      },
      filterParameters: {
        ...this.state.filterParameters,
        closeDate: 'Close date:' + closeDate + ' | '
      }
    })
  }
  //Getting filter parameters
  getFiltersParameter = e => {
    let filterParameter = e.currentTarget.name;
    let parameter = e.target.value;
    this.setState(() => {
      return {
        [filterParameter]: {
          ...this.state.byDate,
          option: parameter,
          changed: false
        }
      }
    });
  }
  //Get multiselect symbols
  getSymbolsArr = e => {
    let symbol = e.target.id //symbol name
    let optionChecked

    if (symbol.length > 0) { //checking if e.target has the id - "symbol name" 
      this.state.bySymbol.symbolsArr.forEach(function (item, index) { //getting index of symbol in array 
        if (item.option === symbol) { optionChecked = index }
      })
      let tempSymbolsArr = this.state.checkedSymbols //copy checkedSymbols array
      if (e.target.checked) { this.state.checkedSymbols.push(symbol) } else { //add or delete symbols from checckedSymbols array 
        this.state.checkedSymbols.forEach(function (item, index) {
          if (symbol === item) { tempSymbolsArr.splice(index, 1) }
        })
      }
      const newSymbolState = this.state.bySymbol.symbolsArr[optionChecked]
      newSymbolState.checked = !newSymbolState.checked
      this.setState({
        ...this.state,
        newSymbolState,
        filterParameters: {
          ...this.state.filterParameters,
          sellectedSymbols: this.state.checkedSymbols.join(';')
        }
      })
    }
  }
  //Clear filters
  clearFilters = () => {
    this.setState({
      tableData: {
        ...this.state.tableData,
        rows: this.state.tableData.defaultTableDataRows
      },
      byDate: {
        ...this.state.byDate,
        openDate: '',
        closeDate: ''
      }
      ,
      filterParameters: {
        ...this.state.filterParameters,
        openDate: '',
        closeDate: '',
        filterString: ''
      }
    })
  }
  //apply filters
  applyFilters = () => {
    let openDate = this.state.filterParameters.openDate,
      closeDate = this.state.filterParameters.closeDate,
      symbolsArr = this.state.filterParameters.sellectedSymbols

    this.setState({
      filterParameters: {
        ...this.state.filterParameters,
        filterString: openDate + closeDate + symbolsArr
      }
    })
    //apply symbols filters
    let tableDataRows = this.state.tableData.rows,
      sortedRows = [],
      sortOpenDate = this.state.byDate.openDate.replace(/-/g, '.')

    this.state.checkedSymbols.forEach(function (chi, chx) {
      tableDataRows.forEach(function (item, index) {
        if (item.symbol === chi && item.openTime) {
          sortedRows.push(item)
        }
      })
    })


    if (sortedRows.length <= 0) { sortedRows = this.state.tableData.defaultTableDataRows }
    //apply filter by date
    //TOLIK
    sortedRows.forEach(function (item, index) {
      if (item.openTime.slice(0, 10) < sortOpenDate) {

        console.log('f')
        sortedRows.splice(index, 1)
      }
    })

    // function filtDate(date) {
    //   if (date.openTime.slice(0, 10) === '2018.04.01') {
    //     sortedRows.push(date)
    //   }

    //   // date => date.openDate.slice(0, 10) >= sortOpenDate
    // }

    // sortedRows.filter(filtDate)
    console.log(sortedRows)



    this.setState({
      tableData: {
        ...this.state.tableData,
        rows: sortedRows
      }
    })
  }

  render() {
    return (
      <div className="Section" >
        <div className="Section__name">Account history</div>
        <div className={`Section__top  ${this.state.activeFilters
          ? 'filters--shown align-items-start'
          : 'filters--hidden '}
        `} >
          <div
            className={`filters d-flex justify-content-start ${this.state.activeFilters
              ? 'flex-column  align-items-start'
              : 'flex-row align-items-center'}`
            }
          >
            <button onClick={this.activeFilters}>
              {this.state.activeFilters ? 'Hide filters' : 'Show filters'}
            </button>
            <p>{this.state.activeFilters
              ? ''
              : this.state.filterParameters.filterString === ''
                ? "no filters applied"
                : this.state.filterParameters.filterString}
            </p>
            {
              this.state.activeFilters
                ? <div className="filters-content">
                  <div className="filters-content__item">
                    <p>Filter by date:</p>
                    <select name="byDate" value={this.state.byDate.option} onChange={this.getFiltersParameter}>
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
                          <input type="date" value={this.state.byDate.openDate} onChange={this.addOpenDateToFilterParameters} />
                          <p className="ml-2">Period to:</p>
                          <input type="date" value={this.state.byDate.closeDate} onChange={this.addCloseDateToFilterParameters} />
                        </>
                    }
                  </div>
                  <div className="filters-content__item">
                    <p>Symbol:</p>
                    <div className="dropDown multiplySelect">
                      <button className="dropTarget" >
                        <p>{this.state.filterParameters.sellectedSymbols !== '' ? this.state.filterParameters.sellectedSymbols : 'Choose symbols'}</p>

                        <FontAwesomeIcon icon={faCaretDown} />
                      </button>
                      <ul onClick={this.getSymbolsArr} >
                        {this.state.bySymbol.symbolsArr.map(function (item, index) {
                          return <li key={index}>
                            <input
                              id={item.option}
                              type="checkbox"
                              defaultChecked={item.checked}
                            />
                            <label htmlFor={item.option} className=' check-item'>{item.option}</label>
                          </li>
                        })}
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
                    <button onClick={this.applyFilters}>
                      <p>Apply</p>
                    </button>
                    <button onClick={this.clearFilters}>
                      <p>Clear</p>
                    </button>
                  </div>
                </div>
                : ''
            }
          </div>
        </div>
        <div className="Section__bottom column extraMt _30">

          <MDBDataTable
            searching={true}
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