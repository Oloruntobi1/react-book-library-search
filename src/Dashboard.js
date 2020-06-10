import React from "react"
import CurrentlyReading from "./CurrentlyReading"
import WantToRead from "./WantToRead"
import Read from "./Read"
import { Link } from "react-router-dom"


function Dashboard (props) {

    const currentlyReading = props.books.filter(book => book.shelf === "currentlyReading")
    const wantToRead = props.books.filter(book => book.shelf === "wantToRead")
    const read = props.books.filter(book => book.shelf === "read")

    return (
     
        <div className="list-books">
               <div className="list-books-title">
                 <h1>MyReads</h1>
               </div>
               <div className="list-books-content">
                 <div>
               <CurrentlyReading
               books={currentlyReading}
               updateBooksShelf={props.updateBooksShelf}
              
               />
               <WantToRead
               books={wantToRead}
               updateBooksShelf={props.updateBooksShelf}
              
               />
               <Read
               books={read}
               updateBooksShelf={props.updateBooksShelf}
               
               />
               </div>
               </div>
               <div className="open-search">
               <Link to="/search"><button>Add a book</button></Link>
               </div>
   
           </div>
   
        
       
       )
}

export default Dashboard