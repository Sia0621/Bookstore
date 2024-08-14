import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function EditBook(){
    const {id} = useParams();

    const navigate = useNavigate();

    const [book, setBook] = useState();

    useEffect(() => {
        fetch(`http://localhost:8080/books/details/${id}`)
            .then(response => response.json())
            .then(data => setBook(data));
    }, [id]);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
    };

    return (
        <div>
            <h1 className="cms-header">Edit Book</h1>
            <form>
                <div className="edit-table">
                    <table className="editTable">
                        <tr>
                            <td>
                                <label>Category:</label>
                            </td>
                            <td>
                                <select name="category" id="category" value={book ? book.category : ''}
                                        onChange={handleCategoryChange}>
                                    <option value="best_seller">best_seller</option>
                                    <option value="fiction">fiction</option>
                                    <option value="nonfiction">nonfiction</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Title:</label>
                            </td>
                            <td>
                                <input type="text" name="title" value={book?book.title: 'Loading'}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Author</label>
                            </td>
                            <td>
                                <input type="text" name="author" value={book?book.author: 'Loading'}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Price:</label>
                            </td>
                            <td>
                                <input type="text" name="price" value={book?book.price: 'Loading'}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Quantity:</label>
                            </td>
                            <td>
                                <input type="text" name="quantity" value={book?book.quantity: 'Loading'}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Image:</label>
                            </td>
                            <td>
                                <input type="file" name="file" id="file" accept=".png, .jpg, .jpeg"/>
                            </td>
                        </tr>
                    </table>
                    <input type="submit" value="Edit" className="editButton"/><br/>
                </div>
            </form>
        </div>
    )
}

export default EditBook;