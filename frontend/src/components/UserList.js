import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

function UserList(){
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/users`)
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/users/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setUsers(users.filter(user => user.id !== id));
                } else {
                    alert('Failed to delete user.');
                }
            })
            .catch(error => {
                console.error('There was an error deleting the user!', error);
            });
    }

    const handleEdit = (id) => {
        navigate(`/admin-dashboard/edit-user/${id}`)
    }

    return(
        <div>
            <h1 className="cms-header">All Users</h1>
            <section>
                <div className="cms-main">
                    <div className="cms-table">
                        <table>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>isAdmin</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                            </tr>
                            {users.map((user, index) => (
                                <tr>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.admin.toString()}</td>
                                    <td>
                                        <button onClick={() => handleEdit(user.id)}>Edit</button>
                                    </td>
                                    <td>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button>
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

export default UserList;