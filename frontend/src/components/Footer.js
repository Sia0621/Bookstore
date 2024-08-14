import './Footer.css'

function Footer(){
    return(
        <div>
            <div id="contact-us-link">
                <h1>Would you like to find out more?</h1>
                <h3>Contact us today</h3>
                <div className="center">
                    <a href={"/contact-us"}>
                        <button className="contactbutton">Contact us</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;