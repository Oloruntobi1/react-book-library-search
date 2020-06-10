import React, { Component } from "react"
import * as BooksApi from "./BooksAPI"

class Book extends Component{

    

    

    updateShelf = (id, value) => {

        this.props.updateBooksShelf(id, value)
       
            const book = {
                title: this.props.title,
                id : id,
                
            }

            BooksApi.update(book, value)
            .then((res) => {})

}

    render () {
    
    
        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.url})` }}></div>
                <div className="book-shelf-changer">
                    <select value={this.props.shelf}
                    onChange={(event) => this.updateShelf(this.props.id, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
        <div className="book-title">{this.props.title}</div>
        {this.props.authors &&  <div className="book-authors">{this.props.authors.join(', ')}</div>}
               
            </div>
            
        )
    }
   

}

export default Book