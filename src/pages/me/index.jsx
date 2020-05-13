import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import picture from '../../assets/img/me.jpg';

function Index() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'HEADER_BACK_CHANGE',
            headerBack: true
        })

        return () => {
            dispatch({
                type: 'HEADER_BACK_CHANGE',
                headerBack: false
            })
        }
    })

    return (
        <section className="me-section">
            <picture style={{ backgroundImage: `url(${picture})` }}></picture>
            <article>
                <h2>me.</h2>
                <p>Someone who tries to do <strong>quality work</strong>, not fast jobs, and thinks that quality is hidden in <strong>small details</strong>, not in design. Someone who tries to <strong>be different</strong> from them, not like everyone else.</p>
                <p>Someone who thinks that being an <strong>expert</strong> on a subject is better than having an opinion on everything. Someone who thinks that if quality jobs are desired, it is necessary to work with <strong>qualified</strong> people.</p>
                <p>It's me.</p>
                <p>If you want quality projects, <strong>contact me</strong>.</p>
                <a download href="https://github.com/yasinkalkan/yasinkalkan.github.io/raw/master/static/media/resume.efda29ba.pdf">Download Resume</a>
            </article>
        </section>
    )
}

export default Index;