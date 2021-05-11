import React from 'react';
import {observer} from 'mobx-react';
import {Pagination, Post, TagNav} from '../';
import { returnAllPosts, returnSearch, returnTagSearch } from '../../Post';
import './HomeBody.scss';
import { useParams } from 'react-router';

const HomeBody = observer(() => {

    const { search } = useParams();
    const { tag } = useParams();

    function returnPost() {
        if (search) {
            return  returnSearch(search)
        } else if (tag) {
            return returnTagSearch(tag)
        } else {
            return returnAllPosts()
        }
    }
    
    return (
        <div className='container-fluid d-flex flex-column body-div '>
            <h1>Recent Posts</h1>
            <TagNav tags={['Programming','JavaScript','React','Python','Eletronic',]} />
            {(() => {
                return returnPost().map((post) => <Post key={Math.random().toString(36).substr(2, 9)} date={post.date} title={post.title} tags={post.tags} id={post.id}/>)
            })()}
            <Pagination></Pagination>
        </div>
    )
})

export default HomeBody;
