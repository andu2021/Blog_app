import { observer } from 'mobx-react';
import React from 'react'
import { Link } from 'react-router-dom';

import {TagBox} from '..';
import { setSelectedId } from '../../Post';
import './Post.scss';

const Post = observer(({date, title, tags = [], id}) => {
    return (
        <div className='container-fluid p-0 post-div'>
            <p className='post-date'>{date}</p>
            <div className='d-flex flex-wrap justify-content-between'>
                <Link to={`/blog/${id}`}><h1 className='post-title' onClick={() => setSelectedId(id)}>{title}</h1></Link>
                <TagBox tagNames={tags}/>
            </div>
        </div>
    )
})

export default Post;
