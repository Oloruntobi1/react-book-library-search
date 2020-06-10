import React from "react"
import Book from "./Book"

function CurrentlyReading(props){
    // console.log(props.books.shelf)
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            
             {
                 props.books.map((book) => (
                 <Book 
                 title={book.title} 
                 key={book.id}
                 authors={book.authors}
                 url={book.imageLinks.thumbnail}
                 shelf={book.shelf}
                 id={book.id}
                 updateBooksShelf={props.updateBooksShelf}
                 />
                 ))
             }
           
          </ol>
        </div>
      </div>
    )
}

export default CurrentlyReading;