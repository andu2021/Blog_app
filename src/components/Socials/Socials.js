import React from 'react'
import { Link } from 'react-router-dom'

import './Socials.scss'

const Socials = () => {
    return (
        <div className='social-div d-flex justify-content-between'>
            <Link to="/" className='soc-link'><i className="fab fa-facebook-f soc-icon"></i> </Link>
            <Link to="/" className='soc-link'><i className="fab fa-github"></i></Link>
            <Link to="/" className='soc-link'><i className="fab fa-twitter"></i></Link>
            <Link to="/" className='soc-link'><i className="fab fa-linkedin-in"></i></Link>
        </div>
    )
}

export default Socials
