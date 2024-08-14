import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function ProductList(){
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/books`)
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const handleEdit = (id) => {
        navigate(`/admin-dashboard/edit-book/${id}`)
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/books/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setProducts(products.filter(product => product.id !== id));
                } else {
                    alert('Failed to delete product.');
                }
            })
            .catch(error => {
                console.error('There was an error deleting the product!', error);
            });
    }

    return(
        <div>
            <h1 className="cms-header">All Books</h1>
            <section>
                <div className="cms-main">
                    <div className="cms-table">
                        <table>
                            <tr>
                                <th>category</th>
                                <th>image</th>
                                <th>title</th>
                                <th>author</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                            </tr>
                            {products.map((product, index) => (
                                <tr>
                                    <td>{product.category}</td>
                                    <td><img src={require(`../images/${product.imgPath}`)} alt={product.title} style={{height :100}}/></td>
                                    <td>{product.title}</td>
                                    <td>{product.author}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button onClick={() => handleEdit(product.id)}>Edit</button>
                                    </td>
                                    <td>
                                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductList;