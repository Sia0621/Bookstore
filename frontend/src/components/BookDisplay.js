import React, { useEffect, useState } from 'react';
import './BookDisplay.css'

function BookDisplay({category}) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/books/random/${category}`)
            .then(response => response.json())
            .then(data => setBooks(data));
    }, [category]);

    return(
        <div>
            <div className="segment"></div>
            <div className="book-display">
                <div className="bsHeader">
                    <div className="left-float"><h2>{category.replace('_', ' ').toUpperCase()}</h2></div>
                    <div className="right-float"><a href={`/category/${category}`}>See all products</a></div>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>
                <div className="bsContent">
                    {books.map((book, index) => (
                        <div className="bsItem">
                            <div className="item-img">
                                <a href={`/details/${book.id}`}>
                                    <img src={require(`../images/${book.imgPath}`)} alt={book.title}/>
                                </a>
                            </div>
                            <div className="item-seg"></div>
                            <div className="item-name">
                                <a href={`/details/${book.id}`}>
                                    <p>{book.title}</p>
                                </a>
                            </div>
                            <div className="item-price">
                                <p>€ {book.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    )
}

export default BookDisplay;