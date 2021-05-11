import React from 'react';
import { Socials } from '..';
import './Footer.scss';

const Footer = () => {
    return (
        
        <footer className='container-fluid p-5 d-flex justify-content-between align-items-center footer'>
            <div className='container-fluid p-0 d-flex justify-content-between align-items-center flex-wrap'>
                <span>Copyright &copy; 2020 Melinora, Inc</span>
                <span><Socials></Socials></span>
            </div>
        </footer>
    )
}

export default Footer;
