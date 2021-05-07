import React from 'react'

import {TagBox} from '../';
import './Post.scss';

const Post = ({date, title, tags = []}) => {
    return (
        <div className='container-fluid p-0'>
            <p>{date}</p>
            <div className='d-flex flex-wrap justify-content-between'>
                <h1>{title}</h1>
                <TagBox tagNames={tags}/>
            </div>

        </div>
    )
}

export default Post
