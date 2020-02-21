import React, { Component } from 'react';

class BookDetail extends Component{
    render(){
        // console.log(this.props.book);
        return(
            <div>
                { this.props.book ? 
                    <p>Name : {this.props.book.name}</p>
                    :
                    <p>detail</p>
                }
            </div>
        )
    }
}

export default BookDetail;