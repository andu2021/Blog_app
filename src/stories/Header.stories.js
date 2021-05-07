import React from 'react';
import {Header} from '../components';
import {BrowserRouter as Router} from 'react-router-dom';


export default {
    title: 'Header',
    component: Header,
}

export const header = () => <Router><Header /></Router>;