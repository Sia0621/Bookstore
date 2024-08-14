import './LoginAndRegister.css'
import Header from "../components/Header";
import {useState} from "react";


function Register(){
    const [inputs, setInputs] = useState({});
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value, isAdmin: 0}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (inputs.password !== inputs.password1) {
            setMessage("Passwords do not match");
            return;
        }

        try {
            const emailResponse = await fetch(`http://localhost:8080/users/isUserExistByUsername/${inputs.username}`);
            const emailExists = await emailResponse.json();

            if (emailExists) {
                setMessage("Username already exists!");
                return;
            }

            const { rePassword, ...dataToSubmit } = inputs;

            const registerResponse = await fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSubmit),
            });

            if (registerResponse.ok) {
                setMessage('Register successful!');
                setInputs({
                    username: "",
                    password: "",
                    password1: "",
                    email: "",
                    address: ""
                });
            } else {
                setMessage('Failed to register');
            }
        } catch (error) {
            setMessage('An error occurred: ' + error.message);
        }
    }

    return(
        <div>
            <Header/>
            <div id="bigBoxRegister" className="bigBox">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                        <div className="inputText">
                            <input type="text" id="id_name" name="username" value={inputs.username || ""} onChange={handleChange} required placeholder="Username"/>
                        </div>
                        <div className="inputText">
                            <input type="password" id="password" name="password" value={inputs.password || ""} onChange={handleChange} required placeholder="Password"/>
                        </div>
                        <div className="inputText">
                            <input type="password" id="re_password" name="password1" value={inputs.password1 || ""} onChange={handleChange} required placeholder="Confirm Password"/>
                        </div>
                        <div className="inputText">
                            <input type="email" id="email" name="email" value={inputs.email || ""} onChange={handleChange} required placeholder="Email"/>
                        </div>
                        <div className="inputText">
                            <input type="text" id="address" name="address" value={inputs.address || ""} onChange={handleChange} required placeholder="Address"/>
                        </div>
                        <br/>
                    </div>
                    <div className="message-text">
                        {message && <p>{message}</p>}
                    </div>
                    <div>
                        <input type="submit" id="register" name="register" value="REGISTER" className="loginButton m-left"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;