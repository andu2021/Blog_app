import React from 'react';
import {TagBox} from '../components';


export default {
    title: 'Tag Box',
    component: TagBox,
}

export const tagBox = () => <TagBox tagNames={['hello','hi','asd','hello','hi','asd']} />;