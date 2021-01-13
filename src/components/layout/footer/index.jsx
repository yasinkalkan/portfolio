import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Index() {
    const color = useSelector(state => state.footerColor);
    const isBack = useSelector(state => state.footerBack);

    return (
        <footer id="footer" className={color}>
            <nav>
                {
                    isBack ? (
                        <Link to='/'><i className="icon-chevron-left"></i> BACK</Link>
                    ) : (
                            <Link to='/portfolio'>PORTFOLIO</Link>
                        )
                }
            </nav>
            <div className="social-links">
                <a target="blank" href="https://www.behance.net/yasgo">
                    <i className="icon-behance"></i>
                </a>
                <a target="blank" href="https://codepen.io/yasgo">
                    <i className="icon-codepen"></i>
                </a>
                <a target="blank" href="https://dribbble.com/yasgo">
                    <i className="icon-dribbble"></i>
                </a>
                <a href="mailto:yasinburakkalkan@gmail.com">
                    <i className="icon-envelope"></i>
                </a>
                <a target="blank" href="https://github.com/yasgo">
                    <i className="icon-github"></i>
                </a>
            </div>
        </footer>
    )
}

export default Index;