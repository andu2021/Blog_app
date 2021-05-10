import React from 'react';
import { Socials } from '..';
import './LeftSidebar.scss';

const LeftSidebar = ({title, body}) => {
    return (
        <div className='container-fluid p-0 sidebar-div align-self-center'>
            <h1>{title}</h1>
            <p>
                {body}
            </p> 
            <p className='explore-me'>EXPLORE ME  <button><i className='fas fa-chevron-right'></i></button></p>
            <Socials></Socials>
        </div>
    )
}

export default LeftSidebar;
