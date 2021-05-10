import React from 'react';
import {observer} from 'mobx-react';
import {Pagination, Post, TagNav} from '../';
import { posts } from '../../Post';
import './HomeBody.scss';

const HomeBody = observer(() => {
    return (
        <div className='content d-flex flex-column body-div '>
            <h1>Recent Posts</h1>
            <TagNav tags={['Programming','JS','React','Python',]} />
            {(() => {
                return [...posts.values()].map((post) => <Post key={Math.random().toString(36).substr(2, 9)} date={post.date} title={post.title} tags={post.tags} id={post.id}/>)
            })()}
            <Pagination></Pagination>
        </div>
    )
})

export default HomeBody;
