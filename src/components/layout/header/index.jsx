import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Index() {
    const color = useSelector(state => state.headerColor);
    const isBack = useSelector(state => state.headerBack);

    return (
        <header id="header" className={color}>
            <Link to='/' className="logo">
                <i className="icon-logo"></i>
            </Link>
            <nav>
                {
                    isBack ? (
                        <Link to='/'><i className="icon-chevron-left"></i> BACK</Link>
                    ) : (
                            <Link to='/me'>ME</Link>
                        )
                }
            </nav>
        </header >
    )
}

export default Index;