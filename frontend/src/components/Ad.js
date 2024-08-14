import './Ad.css'
import ad from '../images/Irish_1200x628-839x439.jpg';

function Ad(){
    return(
        <div>
            <div className="book-display">
                <h2 className="adHeader">Shop Some of Ireland's Greatest Writers</h2>
                <div className="adImg">
                    <img src={ad} alt="ad"/>
                </div>
            </div>
        </div>
    )
}

export default Ad;