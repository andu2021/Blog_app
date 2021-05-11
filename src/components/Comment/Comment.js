import React from 'react'
import './Comment.scss'

const Comment = ({author = '', date = '2.2.2020.', content= ''}) => {
    return (
        <div className='d-flex mb-2 content-div'>
            <div className='div-image mr-3'></div>
            <div>
                <h3 className='author'>{author} <span>{date}</span></h3>
                <p className='content'>{content}</p>
            </div>
        </div>
    )
}

export default Comment
