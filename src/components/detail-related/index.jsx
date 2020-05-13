import React from 'react'
import { Link } from 'react-router-dom';

function Index(props) {

    const currentID = Number(props.id);
    const currentData = props.data.projects;

    const getRandom = () => {
        const left = Math.floor(Math.random() * currentData.length);
        const right = Math.floor(Math.random() * currentData.length);

        if (left !== right && left !== currentID && right !== currentID) {
            return {
                left: left,
                right: right
            }
        } else {
            return getRandom();
        }
    }

    const randomCollection = getRandom();
    const relatedData = {
        left: currentData[randomCollection.left],
        right: currentData[randomCollection.right]
    }

    return (
        <section id="detail-related" className="detail-related">
            <Link to={`/portfolio-detail/${relatedData.left.id}`} onClick={() => window.scrollTo(0,0)}>
                <figure style={{ backgroundImage: `url(${props.data.root + relatedData.left.picture})` }}></figure>
                <article>
                    <span>{relatedData.left.project}</span>
                    <h4>{relatedData.left.client}</h4>
                </article>
            </Link>
            <Link to={`/portfolio-detail/${relatedData.right.id}`} onClick={() => window.scrollTo(0,0)}>
                <figure style={{ backgroundImage: `url(${props.data.root + relatedData.right.picture})` }}></figure>
                <article>
                    <span>{relatedData.right.project}</span>
                    <h4>{relatedData.right.client}</h4>
                </article>
            </Link>
        </section>
    )
}

export default Index;