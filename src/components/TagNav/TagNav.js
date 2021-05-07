import React from 'react';

import './TagNav.scss';

const TagNav = ({tags = []}) => {
    return (
        <div className='container-fluid p-0 d-flex align-items-start tag-nav-div'>
            <button ><i className='fas fa-chevron-left'></i></button>
            <div className='flex-grow-1 tag-item-div'>
                {(() => {
                    return tags.map((tag) => <span key={Math.random().toString(36).substr(2, 9) } className='tag-item'>{tag}</span>)
                })()}
            </div>
            <button><i className='fas fa-chevron-right'></i></button>
        </div>
    )
}

export default TagNav;
