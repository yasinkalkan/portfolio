import React, { useEffect } from 'react'
import imageUrl from '../../assets/img/portfolio-color.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Index() {

    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        window.addEventListener('resize', function () {
            console.log('resize!');
        });

        return () => {
            window.removeEventListener('resize', function () {
                console.log('resize!');
            });
        }
    })

    return (
        <Slider {...settings} className="detail-carousel">
            <div>
                <figure style={{ backgroundImage: `url(${imageUrl})` }}></figure>
            </div>
            <div>
                <figure style={{ backgroundImage: `url(${imageUrl})` }}></figure>
            </div>
            <div>
                <figure style={{ backgroundImage: `url(${imageUrl})` }}></figure>
            </div>
        </Slider>
    )
}

export default Index;