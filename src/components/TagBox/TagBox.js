import React from 'react';
import { Link } from 'react-router-dom';
import './TagBox.scss';

const TagBox = ({tagNames = []}) => {
    return (
        <div className='d-flex flex-wrap'> 
            {(() => {
                return tagNames.reduce((acc, tagName) => {
                    return acc.concat(<Link to={`/tag/${tagName}`} key={Math.random().toString(36).substr(2, 9) }><p className='tag'>#{tagName}</p></Link>)
                }, [])
            })()}
        </div>
    )
}

export default TagBox
