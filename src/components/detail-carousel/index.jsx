import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Index(props) {

    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section id="detail-carousel" className="detail-carousel">
            <Slider {...settings} className="detail-carousel">
                {
                    props.data.map((item, index) => (
                        <div key={index}>
                            <figure style={{ backgroundColor: `${props.color}` }}>
                                <img src={props.root + item.url} alt={item.title} />
                            </figure>
                        </div>
                    ))
                }
            </Slider>
        </section>
    )
}

export default Index;