import {useUser} from "./UserContext";
import {useCart} from "./CartContext";
import { useNavigate } from 'react-router-dom';

function Logout(){
    const { setUser } = useUser();
    const { setCart } = useCart();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await fetch('http://localhost:8080/logout', {
                method: 'POST',
                credentials: 'include',
            });

            setCart('');
            localStorage.clear();

            setUser(null);

            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    handleLogout();

    return null;
}

export default Logout;