import React from 'react';
import ReactDOM from 'react-dom';

import {Provider, connect} from 'react-redux';
let {Provider, connect} = ReactRedux;

// #################### ###### STORE CREATION #################################################

function BookState(state = ["JAVASCRIPT NINJA"], action) {
  switch(action.type) {
    case "BOOK_LIST": 
      return [].concat(state);
    case "ADD_BOOK":
      return [action.payload, ...state];
    case "REMOVE_BOOK":
      return state.filter(book => action.payload != book);
    default: 
      return state;
  }
}

let store = Redux.createStore(BookState);

// ########################## STORE CREATION COMPLETE #################################################


// ############ ADD BOOK COMPONENT CREATION ###############################################

class AddBook extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      input: ""
    }
  }
  
  onHandleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  
  buttonClicked() {
    if(!this.state.input) {
       return;
    }
    this.props.buttonClicked(this.state.input);
    this.setState({
      input: ""
    });
  }
  
  render() {
    return (
      <div>
        <div className="addBook">TO READ BOOKS</div>
        <div>
          <input type="text" 
            placeholder="book" 
            onChange={this.onHandleChange.bind(this)} 
            value={this.state.input}/>
          <button 
            className="btn btn-add" 
            onClick={this.buttonClicked.bind(this)}>
              <i class="material-icons">
                add_circle_outline
              </i>
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    buttonClicked: (name) => {
      dispatch({
        type: "ADD_BOOK",
        payload: name
      });
    }
  }
}
        
let AddBookContainer = connect(null, mapDispatchToProps)(AddBook);

// ############ ADD BOOK COMPONENT ###############################################
  
//##############  BOOK LIST COMPONENT CREATION ####################################################

class BookList extends React.Component {
  constructor(props) {
    super(props);
  } 
  
  removeBook(event) {
    this.props.removeBook(event.currentTarget.dataset.book);
  }
  
  render() { 
    return this.props.books.map(book => {
      return (
        <div key={book} className="list">
          <span>{book}</span>
          <button data-book={book} onClick={this.removeBook.bind(this)} className="btn btn-remove">
              <i class="material-icons">clear</i>
          </button>
        </div>
      )
    })
  }
}

const mapStateToProps = (state) => {
  return {books: state}
};

const mapBookDispatchToProps = (dispatch) => {
  return {
    removeBook: function(book) {
      dispatch({
        type: "REMOVE_BOOK",
        payload: book
      });
    }
  }
};


let BookListContainer = connect(mapStateToProps, mapBookDispatchToProps)(BookList); 

//##############  BOOK LIST COMPONENT ####################################################


ReactDOM.render(<Provider store={store}><div><AddBookContainer /> <BookListContainer /></div></Provider>,
 document.getElementById("app"));

