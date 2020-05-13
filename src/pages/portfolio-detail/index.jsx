import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/detail-carousel';

import IndexSection from '../../components/detail-index';
import ArticleSection from '../../components/detail-article';
import CreditsSection from '../../components/detail-credits';
import RelatedSection from '../../components/detail-related';

function Index(props) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const id = props.match.params.id;

    const onWindowsResize = () => {
        const doc = document.documentElement;
        const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        const detailIndex = document.getElementById('detail-index');
        const detailArticle = document.getElementById('detail-article');
        const detailCarousel = document.getElementById('detail-carousel');
        const header = document.getElementById('header');
        const footer = document.getElementById('footer');

        const afterIndexFooter = top > (footer.clientHeight / 2);
        const beforeRelatedFooter = top < (detailIndex.clientHeight + detailArticle.clientHeight + detailCarousel.clientHeight + (footer.clientHeight / 2));
        const beforeIndexHeader = top > detailIndex.clientHeight - (header.clientHeight / 2);

        dispatch({
            type: 'FOOTER_COLOR_CHANGE',
            color: afterIndexFooter && beforeRelatedFooter ? 'black' : 'white'
        })

        dispatch({
            type: 'HEADER_COLOR_CHANGE',
            color: beforeIndexHeader ? 'black' : 'white'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', onWindowsResize);
        document.getElementById('root').classList.add('full-height');

        return () => {
            window.removeEventListener('scroll', onWindowsResize);
            document.getElementById('root').classList.remove('full-height');

            dispatch({
                type: 'FOOTER_COLOR_CHANGE',
                color: 'white'
            })

            dispatch({
                type: 'HEADER_COLOR_CHANGE',
                color: 'white'
            })
        }
    })

    if (data.projects && id > data.projects.length-1) {
        return <Redirect to='/404' />;
    }

    return (
        <section className="portfolio-detail-section">
            {
                data.projects && <IndexSection
                    picture={data.root + data.projects[id].picture}
                    project={data.projects[id].project}
                    client={data.projects[id].client}
                />
            }

            {
                data.projects && <ArticleSection
                    project={data.projects[id].project}
                    client={data.projects[id].client}
                    detail={data.projects[id].detail}
                    url={data.projects[id].url}
                />
            }

            {
                data.projects && <Carousel
                    data={data.projects[id].gallery}
                    root={data.root}
                    color={data.projects[id].color}
                />
            }

            {
                data.projects && <CreditsSection
                    data={data.projects[id].credits}
                />
            }

            {
                data.projects && <RelatedSection
                    data={data}
                    id={id}
                />
            }
        </section>
    );
}

export default Index;