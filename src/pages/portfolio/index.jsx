import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Index() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
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
        dispatch({
            type: 'FOOTER_BACK_CHANGE',
            footerBack: true
        })

        return () => {
            dispatch({
                type: 'FOOTER_BACK_CHANGE',
                footerBack: false
            })
        }
    })

    return (
        <section className="portfolio-section" >
            <Slider {...settings}>
                {
                    data.projects && data.projects.map((item, index) => (
                        <div key={index} className="portfolio-section-item">
                            <figure style={{ backgroundImage: `url(${data.root + item.picture})` }}></figure>
                            <article className="summary">
                                <span>{item.project}</span>
                                <h2>{item.client}</h2>
                                <p>{item.summary}</p>
                                <Link to={`/portfolio-detail/${index}`} className="button">View Project</Link>
                            </article>
                        </div>
                    ))
                }
            </Slider>
        </section>
    )
}

export default Index;