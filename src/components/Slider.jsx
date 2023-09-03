import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from "../assets/images/slider1.webp"
import slider2 from "../assets/images/slider2.webp"
import slider3 from "../assets/images/slider3.webp"
import SimpleImageSlider from "react-simple-image-slider";
import "../styles/slider.css"


function Slider() {
    const images = [
        { url: slider1 },
        { url: slider2 },
        { url: slider3 },
    ];
    return (
        <div className='slider'>
            <SimpleImageSlider
                width={1420}
                height={600}
                images={images}
                showBullets={true}
                showNavs={true}
                style={{
                    margin : "10px auto",
                    width:"100%",
                    marginTop:"-10px"
                }}
            />
        </div>
    )
}

export default Slider