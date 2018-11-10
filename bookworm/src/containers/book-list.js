import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class Booklist extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  //Whatever is returned here will show up as props
  //inside of BookList
  return {
    books: state.books
  };
}

// Whatever is returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed
  // to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// makes BookList "Hot" with all state updates
// To Promote BookList from a component to a container
// it needs to know about this new dispatch method, selectBook.
// This makes it available as a prop
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booklist);
