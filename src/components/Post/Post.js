import React from 'react'

import {TagBox} from '../';
import './Post.scss';

const Post = ({date, title, tags = []}) => {
    return (
        <div className='container-fluid p-0 post-div '>
            <p className='post-date'>{date}</p>
            <div className='d-flex flex-wrap justify-content-between'>
                <h1 className='post-title'>{title}</h1>
                <TagBox tagNames={tags}/>
            </div>
        </div>
    )
}

export default Post
