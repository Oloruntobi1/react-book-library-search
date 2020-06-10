import React from "react"
import Book from "./Book"

function Read(props){
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
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

export default Read 

