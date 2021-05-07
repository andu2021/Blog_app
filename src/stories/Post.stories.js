import React from 'react';
import {Post} from '../components';


export default {
    title: 'Post',
    component: Post,
}

export const post = () => <Post date='April 5 2021' title='Elixir vs Python' tags={['Progamming', 'py', 'ex']}/>;