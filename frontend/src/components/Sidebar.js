import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Dashboard.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/admin-dashboard/index">Dashboard</Link></li>
                <h4>Users</h4>
                <li><Link to="/admin-dashboard/user-list">All Users</Link></li>
                <li><Link to="/admin-dashboard/add-user">Add Admin</Link></li>
                <h4>Books</h4>
                <li><Link to="/admin-dashboard/book-list">All Books</Link></li>
                <li><Link to="/admin-dashboard/add-book">Add Book</Link></li>
                <h4>Orders</h4>
                <li><Link to="/admin-dashboard/order-list">All Orders</Link></li>
                <h4>Messages</h4>
                <li><Link to="/admin-dashboard/message-list">All Messages</Link></li>
                <li>
                    <b><Link to="/logout">Log out</Link></b>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;