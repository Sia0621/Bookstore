import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../pages/Dashboard.css'
import DashboardIndex from "./DashboardIndex";
import UserList from "./UserList";
import ProductList from "./ProductList";
import OrderList from "./OrderList";
import MessageList from "./MessageList";
import EditUser from "./EditUser";
import AddUser from "./AddUser";
import AddBook from "./AddBook";
import EditBook from "./EditBook";

const ContentArea = () => {
    return (
        <div className="content-area">
            <Routes>
                <Route path="/index" element={<DashboardIndex />} />
                <Route path="/user-list" element={<UserList />} />
                <Route path="/book-list" element={<ProductList />} />
                <Route path="/order-list" element={<OrderList />} />
                <Route path="/message-list" element={<MessageList />} />
                <Route path="/edit-user/:id" element={<EditUser />} />
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/add-book" element={<AddBook />} />
                <Route path="/edit-book/:id" element={<EditBook />} />
            </Routes>
        </div>
    );
};

export default ContentArea;