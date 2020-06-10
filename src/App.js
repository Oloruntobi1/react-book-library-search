import React, { Component } from 'react';
import { Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import SearchPage from "./SearchPage"
import * as BooksApi from "./BooksAPI"
import './App.css'

class BooksApp extends Component{

  state= {
    books: [],
    // searchResults: []
  }

  componentDidMount(){
    BooksApi.getAll()
    .then(books => {
      this.setState({books})
    })
  }
  
  updateBooksShelf = () => {

    BooksApi.getAll()
    .then(books => {
      this.setState({books})
    })


  }
  // updateQuery = (query) => {
   
   
  //     BooksApi.search(query)
  //     .then(searchedbooks => {

  //       const searchedBooks = searchedbooks.map((book) => {
  //         const bookOnShelf = this.state.books.find((b) => b.id === book.id);
  //         return {
  //           ...book,
  //           shelf: bookOnShelf ? bookOnShelf.shelf : "none",
  //         };
  //       });
        
  //       this.setState({searchResults: searchedBooks})
        
  //     })
    
   
  // }

  render () {
   
    return (
      <div className="app">
        <Route  exact path="/" render={() => (
          <Dashboard 
          books={this.state.books}
          updateBooksShelf={this.updateBooksShelf}
          />
        )} />
        <Route  path="/search" render={() => (
          <SearchPage 
          // updateQuery={this.updateQuery}
          books={this.state.books}
          updateBooksShelf={this.updateBooksShelf}
          />
        )} />

      </div>
    );
  }

}


export default BooksApp;
