import React, { useEffect } from 'react'

function Index(props) {
    useEffect(() => {
        document.getElementById('detail-index').classList.add('show');

        return () => {
            document.getElementById('detail-index').classList.remove('show');
        }
    })
    return (
        <section id="detail-index" className="detail-index">
            <figure style={{ backgroundImage: `url(${props.picture})` }}></figure>
            <article>
                <strong>{props.project}</strong>
                <h2>{props.client}</h2>
            </article>
            <small></small>
        </section>
    )
}

export default Index;