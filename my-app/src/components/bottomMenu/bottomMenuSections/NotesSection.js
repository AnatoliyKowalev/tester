import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/pro-solid-svg-icons';
import { faFilePlus } from '@fortawesome/pro-light-svg-icons';
import { MDBDataTable } from 'mdbreact';

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
        rows: [
          {
            notes: 'f',
            symbol: 'f',
            headline: 'f'
          },
          {
            notes: 'f',
            symbol: 'f',
            headline: 'f'
          },
          {
            notes: 'f',
            symbol: 'f',
            headline: 'f'
          },
          {
            notes: 'f',
            symbol: 'f',
            headline: 'f'
          }, {
            notes: 'f',
            symbol: 'f',
            headline: 'f'
          }, {
            notes: 'f',
            symbol: 'f',
            headline: 'f'
          }
        ]
      }
    }
  }

  search = (e) => {
    if (e.target.value.length) {
      this.setState({
        searchLine: e.target.value
      })
    }
  }

  clearSearch = () => this.setState(() => {
    return { searchLine: '' }
  })

  render() {
    return (
      <div className="Section" >
        <div className="Section-name">News</div>
        <div className="Section__top">
          <div className="filters">
            <div className="filters-content">
              <div className="filters-content__item">
                <p>Filter by date:</p>
                <input type="text" onChange={this.search} value={this.state.searchLine} />
                <span data-title="Cear search input"> 
                  <FontAwesomeIcon className="ml-1" icon={faWindowClose} onClick={this.clearSearch} />
                </span>
              </div>
              <div className="filters-content__item filterBtn">
                <button disabled={true}>
                  Add note
                  <FontAwesomeIcon icon={faFilePlus} />
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
        <div className="Section__bottom  extraMt _43">
          <MDBDataTable
            className="w-50"
            searching={false}
            scrollY
            scrollX
            maxHeight='109px'
            striped
            hover
            bordered
            small
            data={this.state.tableData}
          />
          <div className="noteCaption w-50" style={{height: '109px'}}>
            <h4>Note caption</h4>
            <p>xxxx.xx.xx xx:xx</p>
            <p>Note text</p>
          </div>

        </div>
      </div>

    )
  }


}

export default NewsSection