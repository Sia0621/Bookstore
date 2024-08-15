import React, {useState} from "react";

function AddUser(){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value, isAdmin: 1}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            });

            if (response.ok) {
                setInputs({
                    username: "",
                    password: "",
                    email: "",
                    address: ""
                });
            } else {
                alert('Failed to create');
            }
        } catch (error) {
            alert('An error occurred: ' + error.message);
        }
    }

    return(
        <div>
            <h1 class="cms-header">Add Admin</h1>
            <form>
                <div class="edit-table">
                    <table class="editTable">
                        <tr>
                            <td>
                                <label>Name:</label>
                            </td>
                            <td>
                                <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Password:</label>
                            </td>
                            <td>
                                <input type="text" name="password" value={inputs.password || ""} onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Email:</label>
                            </td>
                            <td>
                                <input type="text" name="email" value={inputs.email || ""} onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Address:</label>
                            </td>
                            <td>
                                <input type="text" name="address" value={inputs.address || ""} onChange={handleChange}/>
                            </td>
                        </tr>
                    </table>
                    <input type="submit" value="Add" onClick={handleSubmit} class="editButton" />
                </div>
            </form>
        </div>
    )
}

export default AddUser;