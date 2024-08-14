import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './BookDetails.css'
import {useParams} from "react-router-dom";
import { useCart } from '../components/CartContext';

function BookDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const { cart, setCart } = useCart();

    useEffect(() => {
        fetch(`http://localhost:8080/books/details/${id}`)
            .then(response => response.json())
            .then(data => {setBook(data);console.log(data)});
    }, [id]);

    const handleAddToCart = (book) => {
        const existingProductIndex = cart.findIndex(item => item.id === book.id);

        if (existingProductIndex >= 0) {
            const updatedCart = cart.map((item, index) =>
                index === existingProductIndex
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...book, quantity: 1 }]);
        }

        navigate('/cart');
    };

    if (!book) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <Header/>
            <div className="segment"></div>
            <div className="book-display">
                <div className="d-left">
                    <img src={require(`../images/${book.imgPath}`)} height="500px" />
                </div>
                <form id="addtocartform" >
                <div className="d-right">
                    <div className="d-title">
                        <h2>{book.title}</h2>
                    </div>
                    <div className="d-author">
                        <h4>{book.author}</h4>
                    </div>
                    <div className="d-price">
                        <h4>€ {book.price.toFixed(2)}</h4>
                    </div>
                    <div className="d-addtocart">
                        <input type="submit" value="Submit" className="addToCartButton" onClick={() => handleAddToCart(book)}/>
                    </div>
                </div>
                </form>
                <div className="clear"></div>
            </div>
            <Footer/>
        </div>
)
}

export default BookDetails