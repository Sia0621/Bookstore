import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import BookPreview from "./pages/BookPreview";
import BookDetails from "./pages/BookDetails";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserProvider } from './components/UserContext';
import Dashboard from "./pages/Dashboard";
import Logout from "./components/Logout";
import Cart from "./pages/Cart";
import { CartProvider } from './components/CartContext';


function App() {
    const [cart, setCart] = useState([]);

    return (
        <UserProvider>
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:category" element={<BookPreview />} />
                        <Route path="/details/:id" element={<BookDetails />} />
                        <Route path="/contact-us" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/admin-dashboard/*" element={<Dashboard />} />
                        <Route path="/cart" element={<Cart />} />

                    </Routes>
                </Router>
            </CartProvider>
        </UserProvider>

  );
}

export default App;
