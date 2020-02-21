import React from 'react';

const bookItem = ({item, selectBookItem}) => {

    const selectBook = (e) => {
        e.preventDefault();
        selectBookItem(item);
    }

    return(
        <div className="list-group">
            <a href="#" onClick={selectBook} className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{item.name}</h5>
                </div>
                <p className="mb-1">{item.writer}</p>
            </a>
        </div>
    )
}

export default bookItem;