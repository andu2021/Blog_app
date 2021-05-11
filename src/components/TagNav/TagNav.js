import React from 'react';
import { Link } from 'react-router-dom';

import './TagNav.scss';

const TagNav = ({tags = []}) => {
    return (
         <div className='container-fluid p-0 d-flex  tag-nav-div'>
             <button className=''><i className='fas fa-chevron-left'></i></button>
             <div className='container-fluid pt-1 tag-item-div'>
                 {(() => {
                      return tags.map((tag) => <Link to={`/tag/${tag}`} key={Math.random().toString(36).substr(2, 9) } className='tag-item'>{tag}</Link>)
                 })()}
             </div>
             <button><i className='fas fa-chevron-right'></i></button>
         </div>
        // <div className='tag-item-div'>
        //     {(() => {
        //         return tags.map((tag) => <div key={Math.random().toString(36).substr(2, 9) } className='tag-item'>{tag}</div>)
        //     })()}
        // </div>
    )
}

export default TagNav;
