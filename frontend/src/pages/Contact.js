import './Contact.css'
import Header from "../components/Header";
import img from '../images/contact-us-image.png'
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function Contact(){
    const [inputs, setInputs] = useState({});
    const [token, setToken] = useState();
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    function onRecaptchaChange(token) {
        setToken(token);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!token) {
            setMessage("This field is required!");
            return;
        }

        fetch('http://localhost:8080/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...inputs, token:token}),
        })
            .then(response => {
                if (response.ok) {
                    setMessage('Your message has been submitted successfully.');
                    setInputs('');
                } else if (response.status === 400){
                    setMessage('reCAPTCHA verification failed');
                } else {
                    setMessage('Failed to submit the message.');
                }
            })
            .catch(error => {
                setMessage('An error occurred: ' + error.message);
            });
    }

    return(
        <div>
            <Header/>
            <div className="ctgry-Header">
                <h2>Contact Us</h2>
            </div>

            <div id="contactrow">
                <div id="leftcolumn">
                    <h2 className="heading">Chapters Bookstore</h2>
                    <table>
                        <tr>
                            <td valign="top" className="orange"><i className="bi bi-house"></i></td>
                            <td>21, Marian Place,<br/>
                                Mardyke Walk,<br/>
                                Cork. T12FT45,<br/>
                                Co.Cork.<br/></td>
                        </tr>
                        <tr>
                            <td className="orange"><b><i className="bi bi-telephone"></i></b></td>
                            <td><a href="tel:089 2760187" className="contact_link">089 1234567</a></td>
                        </tr>
                        <tr>
                            <td className="orange"><b><i className="bi bi-envelope"></i></b></td>
                            <td><a href="mailto:chaptersbookstore@google.com"
                                   className="contact_link">chaptersbookstore@google.com</a></td>
                        </tr>
                        <tr>
                            <td className="orange"><b><i className="bi bi-linkedin"></i></b></td>
                            <td><a href="https://www.linkedin.com/in/siyang-fan-70578a2a0/"
                                   className="contact_link">Linkedin</a></td>
                        </tr>
                    </table>
                    <img id="contact-us-image" src={img} alt="contact-us-image"/>
                </div>

                <div id="rightcolumn">
                    <h2 className="heading">Send us a message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="sendinfo">
                            <label htmlFor="name" className="infotitle">Name</label><br/>
                            <input type="text" name="name" className="infoinput" value={inputs.name || ""} onChange={handleChange} required/><br/>
                            <label htmlFor="email" className="infotitle">Email</label><br/>
                            <input type="email" name="email" className="infoinput" value={inputs.email || ""} onChange={handleChange} required/><br/>
                            <label htmlFor="subject" className="infotitle">Subject</label><br/>
                            <input type="text" name="subject" className="infoinput" value={inputs.subject || ""} onChange={handleChange} required/><br/>
                            <label htmlFor="message" className="infotitle">Message</label><br/>
                            <textarea type="text" name="message" className="infomessage" value={inputs.message || ""} onChange={handleChange} required></textarea><br/>
                        </div>
                        <div style={{marginTop:'15px'}}>
                            <ReCAPTCHA
                                sitekey="6LdedycqAAAAAESNdD3b871DpfCCwchFP_v7Rk0u"
                                onChange={onRecaptchaChange}
                            />
                        </div>
                        <div className="message">
                            {message && <p>{message}</p>}
                        </div>
                        <input type="submit" value="Submit" className="submitbutton"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;