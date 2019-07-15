import React from 'react'
import { Table, TextInput, Button } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/pro-solid-svg-icons';    
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons'
import { MDBDataTable } from 'mdbreact';

library.add(fal);

class NewsSection extends React.Component {
  constructor(props){
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
        },{
          notes: 'f',
          symbol: 'f',
          headline: 'f'
        },{
          notes: 'f',
          symbol: 'f',
          headline: 'f'
        }
      ]
    }
    }
  }

  search = (e) => {
    
    // tempText.replace('  ', 'h')
    if(e.target.value !== null || e.target.value !== '') {
      this.setState({
        searchLine:  e.target.value
      })
    }

  }

  clearSearch = (e) => {
    e.target.closest('.input-field').children[1].value = '';
    this.setState({
      searchLine: ''
    })
  }

  render() {
    return (
      <div className="Section" >
        <div className="Section-name">News</div>
        <div className="Section__top">
          <div className="filters">
            <div className="filters-content">
              <div className="filters-content__item">
                <p>Filter by date:</p>
                
                <TextInput
                  icon={<FontAwesomeIcon 
                          icon={faWindowClose}
                          onClick={this.clearSearch} 
                        />} 
                  label="" 
                  onChange={this.search}
                  defaultValue={this.state.searchLine}
                />

              </div>
              <div className="filters-content__item filterBtn">
                  <Button disabled={true}>
                    Add note
                  <FontAwesomeIcon icon={['fal', 'file-plus']}  />
                  </Button>
                  <Button disabled={true}>
                    Edit
                  </Button>
                  <Button disabled={true}>
                    Delete
                  </Button>
                </div>
            </div>
          </div>
        </div>
        <div className="Section__bottom row extraMt _54">
       
            <MDBDataTable
              className="w-50"
              searching={false}
              scrollY
              scrollX
              maxHeight='92px'
              striped
              hover
              bordered
              small
              data={this.state.tableData}
            />

          
        
          <div className="noteCaption w-50">
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