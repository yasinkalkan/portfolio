import React from 'react'

function Index(props) {
    return (
        <section id="detail-index" className="detail-index" style={{ backgroundImage: `url(${props.picture})` }}>
            <article>
                <strong>{props.project}</strong>
                <h2>{props.client}</h2>
            </article>
            <small></small>
        </section>
    )
}

export default Index;