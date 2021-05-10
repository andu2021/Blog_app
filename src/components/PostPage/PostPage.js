import { observer } from 'mobx-react'
import React from 'react'
import { useParams } from 'react-router'
import { Socials, TagBox } from '..'
import { posts } from '../../Post'

 import './PostPage.scss'
 
 const PostPage = observer(() => {

    const { id } = useParams();
    const post = posts.get(Number(id))

     return (
         <div className='content-fluid flex-column post-page-div'>
             <h1>{post.title}</h1>
             <p>{post.date}</p>
             <div className='content post-image-div'>
                image
             </div>
             <p>{post.body}</p>
             <TagBox tagNames={post.tags}/>
             <div className='d-flex'>
                <p className='mr-3'>Share </p> <Socials />
             </div>
         </div>
     )
 })
 
 export default PostPage
 