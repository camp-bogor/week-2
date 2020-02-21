import React, { Component } from 'react';
import BookItem from './BookItem';
import BookDetail from './BookDetail';

class Book extends Component{
    state = {
        books: [
            {
                "name": "book 1",
                "writer": "writer 1",
                "publisher": "publisher 1",
                "price": 10000,
                "stock": 20
            },
            {
                "name": "book 2",
                "writer": "writer 2",
                "publisher": "publisher 2",
                "price": 10000,
                "stock": 20
            },
            {
                "name": "book 3",
                "writer": "writer 3",
                "publisher": "publisher 3",
                "price": 10000,
                "stock": 20
            },
            {
                "name": "book 4",
                "writer": "writer 4",
                "publisher": "publisher 4",
                "price": 10000,
                "stock": 20
            },
            {
                "name": "book 5",
                "writer": "writer 5",
                "publisher": "publisher 5",
                "price": 10000,
                "stock": 20
            }
        ],
        selectBook: null
    }

    actSelectBook = (book) => {
        this.setState({
            selectBook: book
        })
    }

    render(){
        const listBook = this.state.books.map((book, index) => {
            return(
                <BookItem key={index} item={book} selectBookItem={this.actSelectBook} />
            );
        })
        return(
            <div className="row">
                <div className="col-8">
                    {listBook}
                </div>
                <div className="col-4">
                    <BookDetail book={this.state.selectBook} />
                </div>
            </div>
        )
    }
}

export default Book;