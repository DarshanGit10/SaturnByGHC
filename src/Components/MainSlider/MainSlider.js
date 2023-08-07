import React, { useState, useEffect } from 'react';
import './MainSlider.css';
import img1 from '../../Assets/MainSlider/img1.png';
import img2 from '../../Assets/MainSlider/img2.png';

const MainSlider = () => {
    const images = [img1, img2, img1];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, [images.length]);


    return (
        <div className="mainSliderContainer">
            <div className="imageWrapper">
                <img src={images[currentImageIndex]} alt="Main Product" className="mainImage" />
            </div>
            <div className="sliderButtons">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`sliderButton ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                    ></button>
                ))}
            </div>
        </div>

    );
}

export default MainSlider;
