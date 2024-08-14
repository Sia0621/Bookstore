import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function EditUser(){
    const {id} = useParams();

    const navigate = useNavigate();

    const [user, setUser] = useState();

    useEffect(() => {
        fetch(`http://localhost:8080/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [id]);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => {
                if (response.ok) {
                    navigate('/admin-dashboard/user-list');
                } else {
                    alert('Failed to update user.');
                }
            });
    };

    return(
        <div>
            <h1 class="cms-header">Edit Users</h1>
            <form>
                <div class="edit-table">
                    <table class="editTable">
                        <tr>
                            <td>
                                <label>Name:</label>
                            </td>
                            <td>
                                <input type="text" name="name" value={user ? user.username : 'Loading..'} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Password:</label>
                            </td>
                            <td>
                                <input type="text" name="password" value={user ? user.password : 'Loading..'} onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Email:</label>
                            </td>
                            <td>
                                <input type="text" name="email" value={user ? user.email : 'Loading..'} onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Address:</label>
                            </td>
                            <td>
                                <input type="text" name="address" value={user ? user.address : 'Loading..'} onChange={handleChange}/>
                            </td>
                        </tr>
                    </table>
                    <input type="submit" value="Edit" onClick={handleSubmit} class="editButton" />
                </div>
            </form>
        </div>
)
}

export default EditUser;