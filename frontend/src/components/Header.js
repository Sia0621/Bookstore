import './Header.css'
import { Link } from 'react-router-dom';
import {useUser} from "./UserContext";

function Header() {
    const { user, setUser } = useUser();

    return (
        <div className="Header">
            <header>
                <a href={'/'}><h1>CHAPTERS BOOKSTORE</h1></a>
            </header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category/best_seller">Best Sellers</Link></li>
                    <li><Link to="/category/fiction">Fiction</Link></li>
                    <li><Link to="/category/nonfiction">Non-Fiction</Link></li>
                    <li><Link to="/contact-us">Contact us</Link></li>
                    {user ? (
                        <div className="nav-right">
                            <li><Link to="#">{user.username}</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/logout">Log Out</Link></li>
                        </div>
                    ) : (
                        <div className="nav-right">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Sign up</Link></li>
                        </div>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
