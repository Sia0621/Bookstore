

function AddBook(){
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
                                <select name="category" id="category">
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
                                <input type="text" name="title"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Author</label>
                            </td>
                            <td>
                                <input type="text" name="author"/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Price:</label>
                            </td>
                            <td>
                                <input type="text" name="price"/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Quantity:</label>
                            </td>
                            <td>
                                <input type="text" name="quantity"/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Image:</label>
                            </td>
                            <td>
                                <input type="file" name="file" id="file" accept=".png, .jpg, .jpeg"/><br/>
                            </td>
                        </tr>
                    </table>
                    <input type="submit" value="Add Book" className="editButton"/><br/>
                </div>
            </form>
        </div>
)
}

export default AddBook;