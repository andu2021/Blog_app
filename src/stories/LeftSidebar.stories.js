import React from 'react';
import {LeftSidebar} from '../components';



export default {
    title: 'Left Sidebar',
    component: LeftSidebar,
}

const sidebarBody = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer aliquet, orci in bibendum luctus, 
                    turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.`

export const left_sidebar = () => <LeftSidebar title='What I do!' body={sidebarBody} />;