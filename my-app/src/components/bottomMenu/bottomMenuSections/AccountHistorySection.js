import React, { Component, Suspense } from 'react';
import { MDBDataTable } from 'mdbreact';
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { accountHistoryTable } from '../../../utils/constants';
import {
  DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown
} from 'reactstrap';

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
        symbolsArr: []
      },
      byType: {
        option: 'All'
      },
      byProfitType: {
        option: 'All'
      },
      filterParameters: {
        openDate: '',
        closeDate: '',
        sellectedSymbols: '',
        sellectedType: '',
        sellectedProfitType: '',
        filterString: ''
      }
    }
  }

  componentDidMount = () => {
    let symbolOptions = this.state.tableData.defaultTableDataRows,
      symbolsName = [],
      symbols = []
    symbolOptions.forEach((i) => symbolsName.push(i.symbol))
    const uniqueAges = [...new Set(symbolsName)]
    uniqueAges.forEach((i) => symbols.push({ option: i, checked: true }))
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
  //Getting filter parameters
  getFiltersParameter = e => {
    console.log(e.target.name)
    let filterParameter = e.currentTarget.name;
    let parameter = e.target.value;
    this.setState(() => {
      return {
        [filterParameter]: {
          ...this.state.byDate,
          ...this.state.byType,
          option: parameter
        }
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
          sellectedSymbols: this.state.checkedSymbols.join('; ')
        }
      })
    }
  }
  //Get type 
  getType = e => {
    this.getFiltersParameter(e)
    this.setState({
      filterParameters: {
        ...this.state.filterParameters,
        sellectedType: e.target.value
      }
    })
  }
  //Get profit type 
  getProfitType = e => {
    this.getFiltersParameter(e)
    this.setState({
      filterParameters: {
        ...this.state.filterParameters,
        sellectedProfitType: e.target.value
      }
    })
  }
  //Clear filters
  clearFilters = () => {
    this.state.bySymbol.symbolsArr.forEach(function (i) { i.checked = true })
    let symbolInputs = document.querySelectorAll('.symbolInputs')
    symbolInputs.forEach(function (i) { i.checked = true })
    this.setState({
      tableData: {
        ...this.state.tableData,
        rows: this.state.tableData.defaultTableDataRows
      },
      byDate: {
        ...this.state.byDate,
        openDate: '',
        closeDate: ''
      },
      byType: {
        ...this.state.byType,
        option: 'All'
      },
      byProfitType: {
        ...this.state.byType,
        option: 'All'
      },
      filterParameters: {
        ...this.state.filterParameters,
        openDate: '',
        closeDate: '',
        sellectedSymbols: '',
        sellectedType: '',
        sellectedProfitType: '',
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
      type = this.state.filterParameters.sellectedType,
      profitType = this.state.filterParameters.sellectedProfitType,
      labels = [{ label: "Open date:", value: openDate },
      { label: "Close date:", value: closeDate },
      { label: "Symbols:", value: symbolsArr },
      { label: "Type:", value: type },
      { label: "Profit type:", value: profitType }], tempLabels = []
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
    checkedSymbols.forEach(function (chi) {
      sortedRows.forEach(function (item) {
        if (item.symbol === chi && item.openTime) { tempArr.push(item) }
      })
    })
    if (tempArr.length) sortedRows = tempArr
    // apply by type filter ----------
    let byType = this.state.byType.option
    function sortedType(item) {
      if (byType.toLowerCase() !== 'all') {
        if (item.type.toLowerCase() === byType.toLowerCase()) return item
      } else { return item }
    }
    tempArr = sortedRows.filter(sortedType)
    sortedRows = tempArr

    // apply by profit type filter ----------
    let byProfitType = this.state.byProfitType.option
    function sortedProfitType(item) {
      if (byProfitType.toLowerCase() === 'profit') {
        if (item.profit >= 0) return item
      }
      if (byProfitType.toLowerCase() === 'lesion') {
        if (item.profit < 0) return item
      }
      if (byProfitType.toLowerCase() === 'all') { return item }
    }
    tempArr = sortedRows.filter(sortedProfitType)
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
    const symbols = this.state.bySymbol.symbolsArr.map((item, index) =>
      <li key={index} className="pretty p-default p-curve">
        <input
          id={item.option}
          type="checkbox"
          className="symbolInputs"
          defaultChecked={item.checked}
        />
        <div className="state">
          <label>{item.option}</label>
        </div>
      </li>
    );

    return (
      <Suspense fallback={<div>loading...</div>}>
        <div className="Section" >
          <div className="Section__name">Account history</div>
          <div className={`Section__top  ${this.state.activeFilters
            ? 'filters--shown align-items-start'
            : 'filters--hidden '}
        `} >
            <div
              className={`filters d-flex justify-content-start 
            ${this.state.activeFilters
                  ? 'flex-column  align-items-start'
                  : 'flex-row align-items-center'}`
              }
            >
              <button onClick={this.activeFilters}>
                {this.state.activeFilters ? 'Hide filters' : 'Show filters'}
              </button>
              <p className="longString">
                {this.state.activeFilters
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
                      <select
                        name="byDate"
                        value={this.state.byDate.option}
                        onChange={this.getFiltersParameter}
                      >
                        <option>Any date</option>
                        <option>Open date</option>
                        <option>Close date</option>
                        <option>Close date or open date</option>
                        <option>Close date and open date</option>
                      </select>
                      {
                        this.state.byDate.option !== 'Any date' && <>
                          <p className="ml-2">Period from:</p>
                          <input
                            type="date" value={this.state.byDate.openDate}
                            onChange={this.addOpenDateToFilterParameters}
                          />
                          <p className="ml-2">Period to:</p>
                          <input
                            type="date" value={this.state.byDate.closeDate}
                            onChange={this.addCloseDateToFilterParameters}
                          />
                        </>
                      }
                    </div>

                    <div className="filters-content__item">
                      <p>Symbol:</p>
                      <UncontrolledButtonDropdown>
                        <DropdownToggle caret size="sm" color="">
                          <p>
                            {this.state.filterParameters.sellectedSymbols.length
                              ? this.state.filterParameters.sellectedSymbols
                              : 'All symbols'}
                          </p>
                        </DropdownToggle>
                        <DropdownMenu onClick={this.getSymbolsArr}>
                          {symbols}
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
                    <div className="filters-content__item">
                      <p>Type:</p>
                      <select
                        name="byType"
                        defaultValue={this.state.byType.option}
                        onChange={this.getType}
                      >
                        <option>All</option>
                        <option>Buy</option>
                        <option>Sale</option>
                        <option>Deposit</option>
                        <option>WithDrawal</option>
                      </select>
                    </div>
                    <div className="filters-content__item">
                      <p>Type of profit:</p>
                      <select
                        name="byProfitType"
                        defaultValue={this.state.byProfitType.option}
                        onChange={this.getProfitType}
                      >
                        <option>All</option>
                        <option>Profit</option>
                        <option>Lesion</option>
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
              striped
              hover
              bordered
              small
              data={this.state.tableData}
            />
          </div>
        </div>
      </Suspense>
    )
  }
}