import React from 'react';
import './TagBox.scss';

const TagBox = ({tagNames = []}) => {
    return (
        <div className='d-flex flex-wrap'> 
            {(() => {
                return tagNames.reduce((acc, tagName) => {
                    return acc.concat(<p key={Math.random().toString(36).substr(2, 9) } className='tag'>#{tagName}</p>)
                }, [])
            })()}
        </div>
    )
}

export default TagBox
