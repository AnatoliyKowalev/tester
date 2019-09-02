import React, { Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/pro-solid-svg-icons';
import { faFilePlus } from '@fortawesome/pro-light-svg-icons';
import { MDBDataTable } from 'mdbreact';
import { notesTable } from '../../../utils/constants'

class NewsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLine: '',
      tableData: {
        columns: [
          {
            label: 'Notes',
            field: 'notes',
            sort: 'asc',
            width: 120
          },
          {
            label: 'Symbol',
            field: 'symbol',
            sort: 'asc',
            width: 120
          },
          {
            label: 'Headline',
            field: 'headline',
            sort: 'asc',
            width: 300
          }
        ],
        rows: notesTable
      }
    }
  }

  search = e => this.setState({ searchLine: e.target.value })

  clearSearch = () => this.setState({ searchLine: '' })

  render() {

    let { searchLine } = this.state;
    let table = this.state.tableData
    let filteredTable = {
      ...table,
      rows: this.state.searchLine.length
        ? table.rows.filter(row =>
          row.notes.includes(searchLine)
          || row.symbol.includes(searchLine)
          || row.headline.includes(searchLine)
        )
        : table.rows
    };

    return (
      <Suspense fallback={<div>loading...</div>}>
        <div className="Section" >
          <div className="Section__name">News</div>
          <div className="Section__top" >
            <div className="filters">
              <div className="filters-content">
                <div className="filters-content__item">
                  <p>Search:</p>
                  <input
                    type="text"
                    onChange={this.search}
                    value={this.state.searchLine}
                  />
                  <FontAwesomeIcon
                    className="ml-1"
                    icon={faWindowClose}
                    onClick={this.clearSearch}
                  />
                </div>
                <div className="filters-content__item filterBtn">
                  <button disabled={true}>
                    Add note
                  <FontAwesomeIcon icon={faFilePlus} size={'1x'} />
                  </button>
                  <button disabled={true}>
                    Edit
                </button>
                  <button disabled={true}>
                    Delete
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Section__bottom  extraMt _30">
            <MDBDataTable
              className="w-50"
              searching={true}
              scrollY
              scrollX
              striped
              hover
              bordered
              small
              data={filteredTable}
            />
            <div className="noteCaption w-50">
              <h4>Note caption</h4>
              <p>xxxx.xx.xx xx:xx</p>
              <p>Note text</p>
            </div>
          </div>
        </div>
      </Suspense>
    )
  }
}

export default NewsSection