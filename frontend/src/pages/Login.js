import './LoginAndRegister.css'
import Header from "../components/Header";
import {useState} from "react";
import { useUser } from "../components/UserContext"
import { useNavigate } from 'react-router-dom';


function Login(){
    const [inputs, setInputs] = useState({});
    const [message, setMessage] = useState('');
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
                credentials: 'include'
            });
            if (response.ok) {
                const user = await response.json();
                setUser(user);
                setMessage('Login successful');

                console.log(user)

                if(user.admin === true){
                    navigate("/admin-dashboard/index");
                }else{
                    navigate("/");
                }

            } else {
                setMessage('Invalid credentials');
            }
        } catch (error) {
            console.error('Login error:', error);
            setMessage('Login failed');
        }
    }

    return(
        <div>
            <Header/>
            <div id="bigBoxLogin" className="bigBox">
                <h1>Log in</h1>

                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                        <div className="inputText">
                            <input type="text" id="name" name="username" placeholder="Username" required
                                   value={inputs.username || ""} onChange={handleChange}/>
                        </div>
                        <div className="inputText">
                            <input type="password" id="password" name="password" placeholder="Password" required
                                   value={inputs.password || ""} onChange={handleChange}/>
                        </div>
                        <br/>
                    </div>
                    <div className="message-text">
                        {message && <p>{message}</p>}
                    </div>
                    <div>
                        <input type="submit" id="login" name="login" value="LOG IN" className="loginButton m-left"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;