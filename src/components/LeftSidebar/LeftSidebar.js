import React from 'react';
import './LeftSidebar.scss';

const LeftSidebar = ({title, body}) => {
    return (
        <div className='container-fluid p-0 sidebar-div'>
            <h1>{title}</h1>
            <p>
                {body}
            </p> 
            <p>EXPLORE ME  <button><i className='fas fa-chevron-right'></i></button></p>
        </div>
    )
}

export default LeftSidebar;
