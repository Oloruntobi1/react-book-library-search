import React, { Component } from "react"
import { Link } from "react-router-dom"
import Book from "./Book"
import {DebounceInput} from 'react-debounce-input';
import * as BooksApi from "./BooksAPI"

class SearchPage extends Component{

    state= {
        query: '',
        searchedBooks: [],
        }

        // handleSearch = (e) => {

        //     const query = e.target.value.trim()

        //         this.setState({query: query});
        //         this.props.updateQuery(query)

        // }

        handleSearch = (event) => {
            const query = event.target.value;
            //add callback
            this.setState({ query }, () => {
              if (query.trim().length > 0) {
                BooksApi.search(query.trim()).then((returnedBooks) => {
                  if (query === this.state.query && returnedBooks.length > 0) {
                    this.setState({ searchedBooks: returnedBooks });
                  } else {
                    this.setState({ searchedBooks: [] });
                  }
                });
              } else this.setState({ searchedBooks: [] });
            });
          };
        

    render(){

        const {  books } = this.props;

        const searchedBooks = this.state.searchedBooks.map((book) => {
          const bookOnShelf = books.find((b) => b.id === book.id);
          return {
            ...book,
            shelf: bookOnShelf ? bookOnShelf.shelf : "none",
          };
        });
        
        return (
            

                
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={this.handleSearch}
                    />
    
            {/* <DebounceInput
          minLength={2}
          debounceTimeout={2000}
          value={this.state.query}
          onChange={this.handleSearch} /> */}
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
    
                {this.state.query !== '' &&
    
                    searchedBooks.map((book) => {
    
                      
                       
                            return (<Book 
                            title={book.title} 
                            key={book.id}
                            authors={book.authors}
                            url={ book.imageLinks ? book.imageLinks.thumbnail : ''}
                            shelf={book.shelf}
                            id={book.id}
                            updateBooksShelf={this.props.updateBooksShelf}
                            />)
                        
    
                    }) 
    
                    
                    }
    
                </ol>
                </div>
        
            </div>
    
        )
    }
 
}

export default SearchPage