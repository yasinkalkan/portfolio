import React from 'react'

function Index(props) {
    return (
        <section id="detail-article" className="detail-article">
            <div className="container">
                <article className="summary">
                    <span>{props.project}</span>
                    <h2>{props.client}</h2>
                    {
                        props.detail.map((item, index) => <p key={index}>{item}</p>)
                    }
                    <a target="blank" href={props.url} className="button black">View Project</a>
                </article>
            </div>
        </section>
    )
}

export default Index;