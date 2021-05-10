import React from 'react';

import './Socials.scss';

const Socials = () => {
    return (
        <div className='social-div d-flex justify-content-between'>
            <a href="https://www.facebook.com/" className='soc-link'><i className="fab fa-facebook-f soc-icon"></i> </a>
            <a href="https://github.com/" className='soc-link'><i className="fab fa-github"></i></a>
            <a href="https://twitter.com/" className='soc-link'><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/" className='soc-link'><i className="fab fa-linkedin-in"></i></a>
        </div>
    )
}

export default Socials;
