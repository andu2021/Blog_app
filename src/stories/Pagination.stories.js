import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Pagination} from '../components';

export default {
    title: 'Pagination',
    component: Pagination,
}

export const pagination = () => <Router><Pagination /></Router>;