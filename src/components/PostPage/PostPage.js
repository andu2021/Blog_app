import { observer } from 'mobx-react'
import React from 'react'
import { useParams } from 'react-router'
import { CommentSection, Socials, TagBox } from '..'
import { posts } from '../../Post'

 import './PostPage.scss'
 
 const PostPage = observer(() => {

    const { id } = useParams();
    const post = posts.get(Number(id))
     return (
         <div className='content-fluid flex-column post-page-div'>
             <h1>{post.title}</h1>
             <p>{post.date}</p>
             <div className='container post-image-div'>
                <img className='img-fluid' src={post.image}
                alt='foto'></img>
             </div>
             <p>{post.body}</p>
             <TagBox tagNames={post.tags}/>
             <div className='d-flex'>
                <p className='mr-3'>Share </p> <Socials />
             </div>
            <CommentSection postComments={post.comments} id={id}/>
         </div>
     )
 })
 
 export default PostPage
 