import {useState} from "react";

function AddBook(){
    const [imagePreview, setImagePreview] = useState(null);
    const [inputs, setInputs] = useState({});

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setInputs(values => ({...values, file: file}));
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('category', inputs.category);
        data.append('title', inputs.title);
        data.append('author', inputs.author);
        data.append('price', inputs.price);
        data.append('quantity', inputs.quantity);
        data.append('file', inputs.file);

        try {
            const response = await fetch('http://localhost:8080/books/upload', {
                method: 'POST',
                body: data,
            });

            if (response.ok){
                setInputs('');
            }else {
                alert('Failed to upload');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Book upload failed!');
        }

    };

    return(
        <div>
            <h1 className="cms-header">Add Book</h1>
            <form>
                <div className="edit-table">
                    <table className="editTable">
                        <tr>
                            <td>
                                <label>Category:</label>
                            </td>
                            <td>
                                <select name="category" id="category" onChange={handleChange}>
                                    <option value="best_seller">best_seller</option>
                                    <option value="fiction">fiction</option>
                                    <option value="nonfiction">nonfiction</option>
                                </select><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Title:</label>
                            </td>
                            <td>
                                <input type="text" name="title" value={inputs.title || ""} onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Author</label>
                            </td>
                            <td>
                                <input type="text" name="author" value={inputs.author || ""} onChange={handleChange}/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Price:</label>
                            </td>
                            <td>
                                <input type="number" name="price" value={inputs.price || ""} onChange={handleChange}/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Quantity:</label>
                            </td>
                            <td>
                                <input type="number" name="quantity" value={inputs.quantity || ""} onChange={handleChange}/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Image:</label>
                            </td>
                            <td>
                                <input type="file" name="file" id="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange}/><br/>
                                {imagePreview && (
                                    <div>
                                        <img src={imagePreview} alt="Preview" style={{width: '100px', marginTop: '10px'}} />
                                    </div>
                                )}
                            </td>
                        </tr>
                    </table>
                    <input type="submit" value="Add Book" className="editButton" onClick={handleSubmit}/><br/>
                </div>
            </form>
        </div>
)
}

export default AddBook;