import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import { MDBDataTable } from 'mdbreact';
import { newsTable } from '../../../utils/constants'

export default class NewsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedSymbols: [],
      activeFilters: false,
      tableData: {
        columns: [
          {
            label: 'Date/Time',
            field: 'openTime',
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
        rows: newsTable,
        defaultTableDataRows: newsTable
      },
      byDate: {
        option: 'Any date',
        openDate: '',
        closeDate: ''
      },
      bySymbol: {
        symbolsArr: []
      },
      byPriority: {
        option: 'All',
      },
      filterParameters: {
        openDate: '',
        closeDate: '',
        sellectedSymbols: '',
        sellectedPriority: '',
        filterString: ''
      }
    }
  }

  componentDidMount = () => {
    let symbolOptions = this.state.tableData.defaultTableDataRows, symbolsName = [], symbols = []
    symbolOptions.forEach(function (i) { symbolsName.push(i.symbol) })
    const uniqueAges = [...new Set(symbolsName)]
    uniqueAges.forEach(function (i) { symbols.push({ option: i, checked: true }) })
    let checkedSymbols = this.state.checkedSymbols
    symbols.forEach(function (i) { if (i.checked) { checkedSymbols.push(i.option) } })
    this.setState({
      ...this.state,
      bySymbol: {
        ...this.state.bySymbol,
        symbolsArr: symbols
      },
      filterParameters: {
        ...this.state.filterParameters,
        sellectedSymbols: this.state.checkedSymbols.join('; ')
      }
    })

  }
  //Hide / show filters
  activeFilters = () => this.setState({ activeFilters: !this.state.activeFilters })
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
        openDate: openDate
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
        closeDate: closeDate
      }
    })
  }
  //Get multiselect symbols
  getSymbolsArr = e => {
    let symbol = e.target.id //symbol name
    let optionChecked
    if (symbol.length) { //checking if e.target has the id - "symbol name" 
      this.state.bySymbol.symbolsArr.forEach(function (item, index) { //getting index of symbol in array 
        if (item.option === symbol) { optionChecked = index }
      })
      let tempSymbolsArr = this.state.checkedSymbols //copy checkedSymbols array
      if (e.target.checked) { this.state.checkedSymbols.push(symbol) } else { //add or delete symbols from checkedSymbols array 
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
          sellectedSymbols: this.state.checkedSymbols.join('; ')
        }
      })
    }
  }
  //Get priority 
  getPriority = e => {
    this.getFiltersParameter(e)
    this.setState({
      filterParameters: {
        ...this.state.filterParameters,
        sellectedPriority: e.target.value
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
          option: parameter
        }
      }
    })
  }
  //Clear filters
  clearFilters = (e) => {
    this.state.bySymbol.symbolsArr.forEach(function (i) { i.checked = true })
    let symbolInputs = document.querySelectorAll('.symbolInputs')
    symbolInputs.forEach(function (i) { i.checked = true })
    this.setState({
      ...this.state,
      checkedSymbols: [],
      tableData: {
        ...this.state.tableData,
        rows: this.state.tableData.defaultTableDataRows
      },
      byDate: {
        ...this.state.byDate,
        openDate: '',
        closeDate: ''
      },
      byPriority: {
        option: 'All'
      },
      filterParameters: {
        ...this.state.filterParameters,
        openDate: '',
        closeDate: '',
        sellectedPriority: '',
        sellectedSymbols: '',
        filterString: ''
      }
    })

  }
  //apply filters
  applyFilters = () => {
    let openDate = this.state.filterParameters.openDate,
      closeDate = this.state.filterParameters.closeDate,
      symbolsArr = this.state.filterParameters.sellectedSymbols,
      tableDataRows = this.state.tableData.defaultTableDataRows,
      priority = this.state.filterParameters.sellectedPriority,
      labels = [
        { label: "Open date:", value: openDate },
        { label: "Close date:", value: closeDate },
        { label: "Symbols:", value: symbolsArr },
        { label: "Priority:", value: priority }], tempLabels = []
    labels.forEach(function (item, i) {
      if (item.value.length && item.value !== "All") {
        tempLabels.push(item.label + item.value)
      }
    })
    labels = tempLabels
    let sortedRows = [], tempArr = [],
      sortOpenDate = new Date(this.state.byDate.openDate.replace(/-/g, '.')),
      sortCloseDate = new Date(this.state.byDate.closeDate.replace(/-/g, '.')),
      checkedSymbols = this.state.checkedSymbols
    // apply by date filter -----------
    function sortedOpenDate(date) {
      if (new Date(date.openTime.slice(0, 10)) >= sortOpenDate) return date
    }
    function sortedCloseDate(date) {
      if (new Date(date.openTime.slice(0, 10)) <= sortCloseDate) return date
    }
    function sortedOpenCloseDate(date) {
      if (new Date(date.openTime.slice(0, 10)) >= sortOpenDate
        && new Date(date.openTime.slice(0, 10)) <= sortCloseDate) return date
    }
    function sortedNoneDate(date) { return date }

    if (!this.state.byDate.closeDate.length && !this.state.byDate.openDate.length) {
      sortedRows = tableDataRows.filter(sortedNoneDate)
    }
    if (this.state.byDate.openDate.length && !this.state.byDate.closeDate.length) {
      sortedRows = tableDataRows.filter(sortedOpenDate)
    }
    if (this.state.byDate.closeDate.length && !this.state.byDate.openDate.length) {
      sortedRows = tableDataRows.filter(sortedCloseDate)
    }
    if (this.state.byDate.closeDate.length && this.state.byDate.openDate.length) {
      sortedRows = tableDataRows.filter(sortedOpenCloseDate)
    }

    // apply by symbols filter ----------
    checkedSymbols.forEach(function (chi, chx) {
      sortedRows.forEach(function (item, index) {
        if (item.symbol === chi && item.openTime) { tempArr.push(item) }
      })
    })
    if (tempArr.length !== 0) sortedRows = tempArr
    // apply by type filter ----------
    let byPriority = this.state.byPriority.option
    function sortedType(item) {
      if (byPriority.toLowerCase() !== 'all') {
        if (item.priority[0].props.priority === byPriority.toLowerCase()) return item
      } else { return item }
    }
    tempArr = sortedRows.filter(sortedType)
    sortedRows = tempArr
    //changing the state with filters
    this.setState({
      filterParameters: {
        ...this.state.filterParameters,
        filterString: labels.join(' | ')
      },
      tableData: {
        ...this.state.tableData,
        rows: sortedRows
      }
    })
  }

  render() {
    return (
      <div className="Section" >
        <div className="Section__name">News</div>
        <div className={`Section__top  ${this.state.activeFilters
          ? 'filters--shown align-items-start'
          : 'filters--hidden '}
        `} >
          <div
            className={`filters d-flex  justify-content-start ${this.state.activeFilters
              ? 'flex-column align-items-start'
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
            {this.state.activeFilters ?
              <div className="filters-content">
                <div className="filters-content__item">
                  <p>Filter by date:</p>
                  <select name="byDate" defaultValue={this.state.byDate.option} onChange={this.getFiltersParameter}>
                    <option>Any date</option>
                    <option>News date</option>
                  </select>

                  {this.state.byDate.option === 'Any date'
                    ? ''
                    :
                    <>
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
                      {/* <p>{this.state.filterParameters.sellectedSymbols !== '' ? this.state.filterParameters.sellectedSymbols : 'All symbols'}</p> */}
                      <p>{this.state.filterParameters.sellectedSymbols !== '' ? this.state.filterParameters.sellectedSymbols : 'All symbols'}</p>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    <ul onClick={this.getSymbolsArr} className="symbolDropDown">
                      {this.state.bySymbol.symbolsArr.map(function (item, index) {
                        return <li key={index}>
                          <input
                            id={item.option}
                            className="symbolInputs"
                            type="checkbox"
                            defaultChecked={item.checked}
                          // defaultChecked={this.state.bySymbol.symbolsArr[index]}
                          />
                          <label htmlFor={item.option} className='check-item'>{item.option}</label>
                        </li>
                      })}
                    </ul>
                  </div>


                </div>
                <div className="filters-content__item">
                  <p>Priority:</p>
                  <select name="byPriority" defaultValue={this.state.byPriority.option} onChange={this.getPriority}>
                    <option>All</option>
                    <option>High</option>
                    <option>Middle</option>
                    <option>Low</option>
                  </select>
                </div>
                <div className="filters-content__item filterBtn">
                  <button onClick={this.applyFilters}>
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
            // maxHeight='125px'
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