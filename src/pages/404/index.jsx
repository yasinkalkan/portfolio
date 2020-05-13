import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Index() {

    useEffect(() => {
        document.getElementById('root').classList.add('page-not-found');

        return () => {
            document.getElementById('root').classList.remove('page-not-found');
        }
    })

    return (
        <section className="page-not-found-section">
            <h1>404</h1>
            <p className="glitch" data-text="PAGE NOT FOUND">PAGE NOT FOUND</p>
            <Link className="button" to='/'>GO HOME</Link>
        </section>
    )
}

export default Index;