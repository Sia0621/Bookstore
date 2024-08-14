import {useUser} from "./UserContext";
import { useNavigate } from 'react-router-dom';

function Logout(){
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await fetch('http://localhost:8080/logout', {
                method: 'POST',
                credentials: 'include',
            });

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