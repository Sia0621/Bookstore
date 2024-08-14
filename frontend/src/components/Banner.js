import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import "./Banner.css";

function Banner(){
    const settings = {
        infinite: true,          // Infinite loop sliding
        slidesToShow: 1,         // Number of slides to show at once
        slidesToScroll: 1,       // Number of slides to scroll at once
        autoplay: true,          // Enable auto-play
        autoplaySpeed: 2000,
        fade: true,
        dots:true
    };

    return (
        <div className="banner-container">
            <Slider {...settings}>
                <div>
                    <img src={slide1} alt="Slide 1" />
                </div>
                <div>
                    <img src={slide2} alt="Slide 2" />
                </div>
                <div>
                    <img src={slide3} alt="Slide 3" />
                </div>
            </Slider>
        </div>
    )
}

export default Banner;