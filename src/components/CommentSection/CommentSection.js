import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { Comment } from '..'
import { postComment } from '../../Post'
import './CommentSection.scss'

const CommentSection = observer(({postComments = [], id}) => {

    const [comments, setComments] = useState(
        (() => {
            return postComments.reduce((acc, comment) => {return  acc.concat(
                <Comment key={Math.random().toString(36).substr(2, 9) } author={comment.author} content={comment.content} />
                )}, [])
        })()
    )

    const [name, setName] = useState('')
    const [content, setContent] = useState('')

    return (
        <div className='comment-section d-flex flex-column '>
            <h1>Add a Comment</h1>
            <div className='content-fluid d-flex flex-wrap justify-content-between'>
                <label className='d-flex flex-column flex-fill label'>
                    Name*
                    <input type='text' placeholder='Name' onChange={(ev) => setName(ev.target.value)}></input>
                </label>
                <label className='d-flex flex-column flex-fill label'>
                    Email*
                    <input type='text' placeholder='Email@interface.com'></input>
                </label>
                <label className='d-flex flex-column flex-fill label'>
                    Website:
                    <input type='text' placeholder='www.interface.com'></input>
                </label>
            </div>
            <label className='chechbox-label d-flex flex-fill align-items-baseline '>
                    <input type='checkbox'></input>
                    Save my name, email, and website in this browser for the next time I comment
            </label>
            <label className='label' >Message</label>
            <textarea className='form-control' placeholder='Message here' onChange={(ev) => setContent(ev.target.value)}></textarea>
            <button className='button-post' onClick={() => {
                    postComment(id, name, content)
                    setComments(
                        (() => {
                            return postComments.reduce((acc, comment) => {return  acc.concat(
                                <Comment key={Math.random().toString(36).substr(2, 9) } author={comment.author} content={comment.content} date={comment.date}/>
                                )}, []).reverse()
                        })()
                    )
                }}>Post</button>
            <h1>Comments</h1>
            <div>
                {comments}
            </div>  
        </div>
    )
})

export default CommentSection
