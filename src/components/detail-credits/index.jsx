import React from 'react'

function Index(props) {
    return (
        <section id="detail-credits" className="detail-credits">
            <div className="container">
                <ul>
                    <li>
                        <span>CLIENT</span>
                        <strong>{props.data.client}</strong>
                    </li>
                    <li>
                        <span>PROJECT</span>
                        <strong>{props.data.project}</strong>
                    </li>
                    <li>
                        <span>DEVELOPER</span>
                        <strong>{props.data.developer}</strong>
                    </li>
                    <li>
                        <span>DESIGNER</span>
                        <strong>{props.data.designer}</strong>
                    </li>
                    <li>
                        <span>COMPANY</span>
                        <strong>{props.data.company}</strong>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Index;